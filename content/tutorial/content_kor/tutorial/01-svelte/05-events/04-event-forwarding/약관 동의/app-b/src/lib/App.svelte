<script>
	import Modal from "./Modal.svelte";

	let showModal = false
	let agreement = false
</script>

<div>
	<input type="checkbox" disabled checked={agreement}>
	<span>약관</span>에 동의해주십시오.
</div>

{#if showModal}
	<Modal />
{/if}

<style>
    span {
		text-decoration: underline;
		cursor: pointer;
		color: blue;
	}
</style>