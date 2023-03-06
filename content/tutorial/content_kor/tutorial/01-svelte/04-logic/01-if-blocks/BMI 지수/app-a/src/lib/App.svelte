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

<Component {...arr[0]} />
<Component {...arr[1]} />
<Component {...arr[2]} />
