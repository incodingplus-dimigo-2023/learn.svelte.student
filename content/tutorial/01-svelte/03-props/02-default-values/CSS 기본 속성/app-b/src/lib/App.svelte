<script>
	import Component from "./Component.svelte";

	const arr = [
		{
			bcolor: "transparent",
			color: "canvastex",
			padding: "0",
		},
		{
			bcolor: "blue",
			color: "canvastext",
			padding: "0",
		},
		{
			bcolor: "blue",
			color: "red",
			padding: "0",
		},
		{
			bcolor: "blue",
			color: "red",
			padding: "100px",
		},
	];
</script>

<Component
	bcolor={arr[0].bcolor}
	color={arr[0].color}
	padding={arr[0].padding}
/>
<Component
	bcolor={arr[1].bcolor}
	color={arr[1].color}
	padding={arr[1].padding}
/>
<Component
	bcolor={arr[2].bcolor}
	color={arr[2].color}
	padding={arr[2].padding}
/>
<Component
	bcolor={arr[3].bcolor}
	color={arr[3].color}
	padding={arr[3].padding}
/>
