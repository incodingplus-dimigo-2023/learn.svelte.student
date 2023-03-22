<script>
	$: value = "";
	$: filtered = "";

	const words = ["스벨트", "svelte"];
	$: {
		let temp = value;
		for (let i = 0; i < words.length; i++) {
			temp = temp.replaceAll(words[i], "*".repeat(words[i].length));
		}

		filtered = temp;
	}
	// $: {

	// }
	// $: checkko = value.replace(words[0], "***");
	// $: checken = value.replace(words[1], "******");
</script>

<textarea bind:value />
<div>{filtered}</div>
