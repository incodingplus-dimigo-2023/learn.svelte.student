<script>
// @ts-nocheck

	import Component from "./Component.svelte";

	let arr = [{
		bc: "transparent",
		color: "canvastext",
		padding: 0
	}, {
		bc: "blue",
		color: "canvastext",
		padding: 0
	}, {
		bc: "blue",
		color: "red",
		padding: 0
	}, {
		bc: "blue",
		color: "red",
		padding: '100px'
	}]
</script>
{#each arr as {bc, color, padding}, i}
<Component
	bc = {arr[i].bc}
	color = {arr[i].color}
	padding = {arr[i].padding}
/>
{/each}