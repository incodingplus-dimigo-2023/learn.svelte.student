<script>
	import { afterUpdate, onDestroy, onMount, tick } from "svelte";
	import { sampleText } from "./sampleText"

	let targetText = ""
	let result = sampleText
	
	let div
	let input

	let showInput = false

	$: {
		if(targetText === ""){
			result = sampleText
		} else {
			result = sampleText.replaceAll(targetText, `<span>${targetText}</span>`)
		}
	}

	const toggleInputTag = async (event) => {
		
	}

	onMount(() => { 
		
	})

	onDestroy(() => {
		
	})
</script>


{#if showInput}
	<input type="text" bind:value={targetText} bind:this={input}>	
{/if}


<div bind:this={div}>
	{@html result}
</div>

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