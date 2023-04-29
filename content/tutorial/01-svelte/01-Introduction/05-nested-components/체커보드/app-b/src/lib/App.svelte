<script>
	import Black from "./Black.svelte";
	import White from "./White.svelte";
</script>


<div class="flex-container">
	<Black /><White /><Black /><White />
</div>
<div class="flex-container">
	<White /><Black /><White /><Black />
</div>
<div class="flex-container">
	<Black /><White /><Black /><White />
</div>
<div class="flex-container">
	<White /><Black /><White /><Black />
</div>



<style>
	.flex-container{
		display: flex;
		width: 200px;
		border: 1px solid black;
		
	}
	.flex-container > div{
		display:flex;
	}
</style>