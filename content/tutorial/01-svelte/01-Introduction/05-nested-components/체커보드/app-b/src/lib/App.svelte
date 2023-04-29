<script>
	import Black from "./Black.svelte";
	import White from "./White.svelte";
</script>

<style>
	.flex-container{
		display: inline-flex;
		border: 1px solid black;
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
	



