<script>
	let value = "";
	let filtered = "";

	const words = ["스벨트", "svelte"];

	$: {
		value
	}
</script>

<textarea bind:value={value} />
<div>{filtered}</div>
