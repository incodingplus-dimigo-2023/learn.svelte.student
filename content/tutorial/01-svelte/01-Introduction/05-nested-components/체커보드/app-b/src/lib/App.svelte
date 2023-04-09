<script>
	import Black from "./Black.svelte";
	import White from "./White.svelte";
</script>

<div class="flex-container">
	<Black />
	<White />
</div>

<style>
	.flex-container{
		display: inline-flex;
	}
	.flex-container > div{
		display:flex;
	}
</style>