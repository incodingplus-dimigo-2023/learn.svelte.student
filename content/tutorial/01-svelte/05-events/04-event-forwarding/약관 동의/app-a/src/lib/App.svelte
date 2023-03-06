<script>
	import Modal from "./Modal.svelte";

	let showModal = false
	let agreement = false
	const modal = () => {
		showModal = true
	}
	const confirm = () => {
		agreement = true
		showModal = false
	}
	const cancel = () => {
		agreement = false
		showModal = false
	}
</script>
<div>
	<input type="checkbox" disabled checked={agreement}>
	<span on:click={modal}>약관</span>에 동의해주십시오.
</div>

{#if showModal}
	<Modal on:confirmed={confirm} on:canceled={cancel}/>
{/if}

<style>
    span {
		text-decoration: underline;
		cursor: pointer;
		color: blue;
	}
</style>