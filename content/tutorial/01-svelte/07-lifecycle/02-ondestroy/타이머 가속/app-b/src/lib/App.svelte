<script>
	import { onMount } from "svelte";
	import Time from './Time.svelte'
	let count = 0;
	let arr = [];
	let time = 0;
	let tickTime = () => {
		time += 1;
	};
	onMount(() => {
		let set = setInterval(tickTime, 1000);
		return () => {
			clearInterval(set);
		}
	})
</script>
<h1>{time}</h1>
<button on:click={() => arr = [...arr, count++]}>가속 추가하기</button>

{#each arr as id}
	<Time on:click={() => {
		let ind = arr.indexOf(id);
		arr = [...arr.slice(0, ind), ...arr.slice(ind + 1)];
	}} on:time={tickTime} />
{/each}