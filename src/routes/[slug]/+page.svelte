<script>
    import Output from "./Output.svelte";
    import { onMount } from "svelte";
    import { afterNavigate } from "$app/navigation";
	import { state } from './state.js';
    import Menu from "./Menu.svelte";
    import ioClient from 'socket.io-client';
    import { browser } from "$app/environment";
    /** @type {import('./$types').PageData}*/
    export let data;
    /** @type {Map<string,number>}*/
    const map = new Map();
    if(browser){
        const socket = ioClient(location.origin);
        socket.on('message', /** @param {import('fs/promises').FileChangeInfo<string> & {mtimeMs:number}} e*/ async e => {
            let num = map.get(e.filename) ?? 0;
            if(Math.abs(e.mtimeMs - num) < 100){
                if(e.mtimeMs > num) map.set(e.filename, e.mtimeMs);
                return
            }
            if(e.filename.split(/[\\\/]/).includes(data.exercise.dir.split('/').slice(-1)[0])){
                map.set(e.filename, e.mtimeMs);
                const res = await fetch('/api', {
                    method:'POST',
                    body:JSON.stringify({...e, dir:data.exercise.dir})
                });
                if(res.status !== 500){
                    /** @type {import('$lib/types').FileStub}*/
                    const json = await res.json();
                    state.update_file(json);
                }
            }
        });
    }
    onMount(() => {
		state.switch_exercise(data.exercise);
	});
	afterNavigate(() => {
		state.switch_exercise(data.exercise);
	});
</script>
<main>
    <Menu current={data.exercise} index={data.index}/>
    <Output path={data.exercise.path} />
</main>

<style>
    :global(body){
        margin:0;
        overflow: hidden;
    }
    main{
        display: flex;
        flex-direction: column;
        height: 100vh;
    }
</style>