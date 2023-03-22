<script>
	import Modal from "./Modal.svelte";

	let showModal = false;
	let agreement = false;

	function on() {
		showModal = true;
	}
	function chy() {
		agreement = true;
		showModal = false	;
	}
	function chn() {
		agreement = false;
		showModal = false	;
	}
</script>

<div>
	<input type="checkbox" disabled checked={agreement} />
	<span on:click={on}>약관</span>에 동의해주십시오.
</div>

{#if showModal}
	<Modal on:yes={chy} on:no={chn} />
{/if}

<style>
	span {
		text-decoration: underline;
		cursor: pointer;
		color: blue;
	}
</style>
