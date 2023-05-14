<script>
	import Component from "./Component.svelte";

	let arr = [{
		weight: 75,
		height: 185
	}, {
		weight: 80,
		height: 170
	}, {
		weight: 50,
		height: 192
	}]
</script>
{#each arr as {weight, height}, i}
<Component
	weight = {arr[i].weight}
	height = {arr[i].height}
/>
{/each}