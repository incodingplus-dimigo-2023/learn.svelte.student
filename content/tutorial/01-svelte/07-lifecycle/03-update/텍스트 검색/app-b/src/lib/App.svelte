<script>
    import { afterUpdate, beforeUpdate } from "svelte";
	import { sampleText } from "./sampleText"

	let targetText = ""
	let result = sampleText
	/**@type {Element} */
	let div

	$: {
		if(targetText === ""){
			result = sampleText
		} else {
			result = sampleText.replaceAll(targetText, `<span>${targetText}</span>`)
		}
		afterUpdate(()=>{
			if(div.children[0] !== undefined)div.children[0].scrollIntoView();
		})
		console.log(targetText, 'text')
	}
</script>

<input type="text" bind:value={targetText}>

<div bind:this={div}>
	{@html result}
</div>
<div></div>


<style>
	:global(span) {
		background-color: yellow;
		font-weight: bold;
	}

	div {
		margin-right: 300px;
	}

	input {
		position: fixed;
		top: 0;
		right: 0;
	}
</style>