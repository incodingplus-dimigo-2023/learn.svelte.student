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

<Component weight = '{arr[0].weight}' height = '{arr[0].height}' />
<Component weight = '{arr[1].weight}' height = '{arr[1].height}' />
<Component weight = '{arr[2].weight}' height = '{arr[2].height}' />

