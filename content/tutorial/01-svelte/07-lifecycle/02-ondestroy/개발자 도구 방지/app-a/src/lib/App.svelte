<script>
	import NormalPage from "./NormalPage.svelte";
	import SecurePage from "./SecurePage.svelte";

	let pageIndex = 0
</script>

{#if pageIndex === 0}
	<NormalPage on:click={() => pageIndex++} />
{:else }
	<SecurePage on:click={() => pageIndex--} />
{/if}