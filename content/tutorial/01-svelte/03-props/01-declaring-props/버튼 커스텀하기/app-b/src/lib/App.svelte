<script>
// @ts-nocheck
	import Component from "./Component.svelte";

	let arr = [{
		name: "react",
		color: "#61DBFB"
	}, {
		name: "vue",
		color: "#3FB984"
	}, {
		name: "svelte",
		color: "#FF3E00"
	}]
</script>
{#each arr as {name, color}, i}
<Component
name = {arr[i].name}
color = {arr[i].color}
/>
{/each}