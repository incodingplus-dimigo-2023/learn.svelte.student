<script>
	import Black from "./Black.svelte";
	import White from "./White.svelte";	
</script>

<style>
	.flex-container{
		display: inline-flex;
	}
	.flex-container > div{
		display:flex;
		flex-direction: column;
	}
</style>

<div class="flex-container">
	<div>
		<Black />
		<White />
		<Black />
		<White />
	</div>
	<div>
		<White />
		<Black />
		<White />
		<Black />
	</div>
	<div>
		<Black />
		<White />
		<Black />
		<White />
	</div>
	<div>
		<White />
		<Black />
		<White />
		<Black />
	</div>
</div>
