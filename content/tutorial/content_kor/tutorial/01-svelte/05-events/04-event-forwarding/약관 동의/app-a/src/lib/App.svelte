<script>
	import Modal from "./Modal.svelte";

	let showModal = false
	let agreement = false
</script>

<div>
	<input type="checkbox" disabled checked={agreement}>
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<span on:click={()=>{showModal = true;}}>약관</span>에 동의해주십시오.
</div>

{#if showModal}
	<Modal on:cancel={()=>{showModal = false; agreement = false;}} on:confirm={()=>{showModal = false; agreement = true;}}/>
{/if}

<style>
    span {
		text-decoration: underline;
		cursor: pointer;
		color: blue;
	}
</style>