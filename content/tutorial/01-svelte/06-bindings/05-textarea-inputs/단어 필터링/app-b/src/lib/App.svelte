<script>
	let value = ""
	let filtered = ""
	const re = "*"

	const words = ["svelte", "스벨트"]

	$: {
		filtered = value;
		words.forEach((v, i)=>{
				filtered = filtered.replaceAll(`${v}`, (a)=>{
					return re.repeat(a.length)
				})
		})
		
	}
</script>

<textarea bind:value ></textarea>
<div>{filtered}</div>