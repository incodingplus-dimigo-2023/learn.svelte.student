<script>
	import Component from "./Component.svelte";

	const arr = [{
		backgroundcolor: "transparent",
		color: "canvastext",
		padding: "0",
	}, {
		backgroundcolor: "blue",
		color: "canvastext",
		padding: "0",
	}, {
		backgroundcolor: "blue",
		color: "red",
		padding: "0",
	}, {
		backgroundcolor: "blue",
		color: "red",
		padding: "100px",
	}]	
	console.log(arr[0].backgroundcolor)
</script>
<Component backgroundcolor =  "{arr[0].backgroundcolor}" color =  "{arr[0].color}" padding = "{arr[0].padding}"></Component>
<Component backgroundcolor =  "{arr[1].backgroundcolor}" color =  "{arr[1].color}" padding = "{arr[1].padding}"></Component>
<Component backgroundcolor =  "{arr[2].backgroundcolor}" color =  "{arr[2].color}" padding = "{arr[2].padding}"></Component>
<Component backgroundcolor =  "{arr[3].backgroundcolor}" color =  "{arr[3].color}" padding = "{arr[3].padding}"></Component>


