<script>


	let value = ""
	let filtered = ""

	const words = ["스벨트", "svelte"]
	/** 
	 * @type { (len:number) => string}
	*/
	const plus = (len) => {
		let star = ''
		for(let i = 0; i < len; i++) {
			star = star + '*'
		}
		return star;
	}

	$: {
		filtered = value
		for(let i = 0; i < 2; i++) {
			if(filtered.includes(words[i])) {
				filtered = filtered.replaceAll(words[i], plus(words[i].length))
			}
		}
	}
</script>

<textarea bind:value></textarea>
<div>{filtered}</div>