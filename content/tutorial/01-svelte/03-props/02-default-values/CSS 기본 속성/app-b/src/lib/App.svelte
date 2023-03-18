<script>
	import Component from "./Component.svelte";

	const arr =[{
		backgroundcolor: "transparent",
		color: "canvastext",
		padding: 0
	}, {
		backgroundcolor: 'blue',
		color: 'canvastext',
		padding: 0
	}, {
		backgroundcolor: 'blue',
		color: 'red',
		padding: 0
	}, {
		backgroundcolor: 'blue',
		color: 'red',
		padding: '100px'
	}]
</script>

{#each arr as {backgroundcolor, color, padding}}
	<Component backgroundcolor="{backgroundcolor}" color="{color}" padding="{padding}"/>
{/each}

