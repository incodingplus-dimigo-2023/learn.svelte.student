<script>
	import Component from "./Component.svelte";

	const arr = [
		{
			name: "react",
			color: "#61DBFB",
		},
		{
			name: "vue",
			color: "#3FB984",
		},
		{
			name: "svelte",
			color: "#FF3E00",
		},
	];
</script>

<Component
	name={arr[0].name}
	color={arr[0].color}
/>
<Component
	name={arr[1].name}
	color={arr[1].color}
/>
<Component
	name={arr[2].name}
	color={arr[2].color}
/>
