<script>
	import { afterUpdate, beforeUpdate, onDestroy, onMount, tick } from "svelte";
	import { sampleText } from "./sampleText"

	let targetText = ""
	let result = sampleText
	/**@type {Element}*/
	let div
	let input

	let showInput = false

	$: {
		if(targetText === ""){
			result = sampleText
		} else {
			result = sampleText.replaceAll(targetText, `<span>${targetText}</span>`)
		}
		afterUpdate(()=>{
			if(div.children[0] !== undefined)div.children[0].scrollIntoView();
		})
	}
	/**@param {KeyboardEvent} event*/
	const toggleInputTag = async (event) => {
		console.log(event.key,'key')
		if(event.ctrlKey&&event.key === 'f')showInput = true
		if(event.key === 'Escape') showInput = false

		event.preventDefault()
		if(event.key === 'Backspace'){
			console.log('무야호')
			await tick();
			const arr = targetText.split('');
			console.log(arr, 'arr')
			console.log(arr.length, 'length')
			arr[arr.length-1] = ''
			targetText = arr.join('');
		}
	}

	onMount(() => { 
		
	})
	
	

	onDestroy(() => {
		
	})
</script>
	<svelte:window on:keydown={toggleInputTag}/>
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