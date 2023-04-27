<script>
	import { createEventDispatcher, onDestroy, onMount } from "svelte";
    let dis = createEventDispatcher();
    let inter;
    onMount(() => {
        inter = setInterval(() => {
            dis('time');
        }, 1000);
    });
    onDestroy(() => {
        // setInterval 지우는 코드 작성
        clearInterval(inter);
    });
</script>
<button on:click>가속 지우기</button>