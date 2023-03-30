<script>
	let value = ""
	let filtered = ""

	const words = ["스벨트", "svelte"]

	$: {
		// filtered = value;
		// if(value === words[0]){
		// 	filtered = "***"
		// } else if(value === words[1]) {
		// 	filtered = "******"
		// }
		console.log(value, filtered)

		

	}
</script>

<textarea bind:value={value}></textarea>
<div>{filtered}</div>