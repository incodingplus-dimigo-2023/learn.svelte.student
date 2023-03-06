<script>
	import Black from "./Black.svelte";
	import White from "./White.svelte";
</script>
<div>
	<div class="container">
		<div class="flex-container">
			<Black></Black>
			<White></White>
			<Black></Black>
			<White></White>
		</div>
		<div class="flex-container">
			<White></White>
			<Black></Black>
			<White></White>
			<Black></Black>
		</div>
		<div class="flex-container">
			<Black></Black>
			<White></White>
			<Black></Black>
			<White></White>
		</div>
		<div class="flex-container">
			<White></White>
			<Black></Black>
			<White></White>
			<Black></Black>
		</div>
	</div>

</div>

<style>
	.flex-container{
		display: flex;
	}
	.container {
		border: solid 1px gray;
		width: 200px;
		height: 200px;
	}
</style>