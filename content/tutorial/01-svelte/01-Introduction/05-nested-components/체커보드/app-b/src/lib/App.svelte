<script>
	import Black from "./Black.svelte";
	import White from "./White.svelte";
</script>
<div class=flex-container>
	<div>
		<Black />
	</div>
	<div>
		<White />
	</div>
	<div>
		<Black />
	</div>
	<div>
		<White />
	</div>
</div>
<div class=flex-container>
	<div>
		<White />
	</div>
	<div>
		<Black />
	</div>
	<div>
		<White />
	</div>
	<div>
		<Black />
	</div>
</div>
<div class=flex-container>
	<div>
		<Black />
	</div>
	<div>
		<White />
	</div>
	<div>
		<Black />
	</div>
	<div>
		<White />
	</div>
</div>
<div class=flex-container>
	<div>
		<White />
	</div>
	<div>
		<Black />
	</div>
	<div>
		<White />
	</div>
	<div>
		<Black />
	</div>
</div>
<style>
	.flex-container{
		display: inline-flex;
		width: 100vw;
		height: 50px;
	}
	.flex-container > div{
		display:flex;
	}
</style>