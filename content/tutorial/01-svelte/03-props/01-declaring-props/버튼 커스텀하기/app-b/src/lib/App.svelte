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

<Component {...arr[0]} />
<Component {...arr[1]} />
<Component {...arr[2]} />