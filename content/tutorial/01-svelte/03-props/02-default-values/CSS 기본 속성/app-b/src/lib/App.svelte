<script>
	import Component from "./Component.svelte";

	const arr = [{
		background: "transparent",
		color: "canvastext",
		padding: 0
	}, {
		background: "blue",
		color: "canvastext",
		padding: 0
	}, {
		background: "blue",
		color: "red",
		padding: 0
	}, {
		background: "blue",
		color: "red",
		padding: '100px'
	},]
</script>
<Component background = {arr[0].background} color = {arr[0].color} padding = {arr[0].padding}/>
<Component background = {arr[1].background} color = {arr[1].color} padding = {arr[1].padding}/>
<Component background = {arr[2].background} color = {arr[2].color} padding = {arr[2].padding}/>
<Component background = {arr[3].background} color = {arr[3].color} padding = {arr[3].padding}/>
