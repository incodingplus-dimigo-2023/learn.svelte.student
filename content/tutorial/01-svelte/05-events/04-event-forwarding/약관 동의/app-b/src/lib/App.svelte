<script>
	import Modal from "./Modal.svelte";

	let showModal = false
	let agreement = false
</script>

<div>
	<input type="checkbox" disabled checked={agreement}>
	<span on:click={() => showModal = true}>약관</span>에 동의해주십시오.
</div>

{#if showModal}
	<Modal on:cancel={() => {agreement = false; showModal = false}} on:confirm={() => {agreement = true; showModal = false}} />
{/if}

<style>
    span {
		text-decoration: underline;
		cursor: pointer;
		color: blue;
	}
</style>