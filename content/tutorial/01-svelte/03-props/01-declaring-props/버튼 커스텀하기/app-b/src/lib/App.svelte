<script>
	import Component from "./Component.svelte";

	const arr = [{
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
<Component name="{name}" color="{color}" />
{/each}