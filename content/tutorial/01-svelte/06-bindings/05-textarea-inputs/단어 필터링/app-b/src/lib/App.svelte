<script>
	let value = ""
	let filtered = ""

	const words = ["스벨트", "svelte"]

	$: {
		filtered = value;
		for (let i = 0; i < words.length; i++) {
			filtered = filtered.replaceAll(words[i], '*'.repeat(words[i].length));
		}
	}
</script>

<textarea bind:value={value}></textarea>
<div>{filtered}</div>