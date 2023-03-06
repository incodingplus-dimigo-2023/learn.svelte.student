<script>
	import Black from "./Black.svelte";
	import White from "./White.svelte";
</script>

<div class="flex-container"><Black /><White /><Black /><White /><White /><Black /><White /><Black /><Black /><White /><Black /><White /><White /><Black /><White /><Black /></div>

<style>
	.flex-container{
		display: inline-flex;
		width: 208px;
		flex-wrap: wrap;
	}
	:global(.flex-container > div){
		display:flex;
		width: 50px;
        height: 50px;
		transition: 200ms;
		border: 1px solid black;
	}
</style>