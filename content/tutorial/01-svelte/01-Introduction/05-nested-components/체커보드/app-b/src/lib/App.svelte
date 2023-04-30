<script>
	import Black from "./Black.svelte";
	import White from "./White.svelte";
</script>

<style>
	.flex-container{
		display: inline-flex;
	}
	.border{
		border:black solid 1px
	}
</style>
<table>
<div class="flex-container border">
	<tr><Black /><White /><Black /><White /></tr>
	<tr><White /><Black /><White /><Black /></tr>
	<tr><Black /><White /><Black /><White /></tr>
	<tr><White /><Black /><White /><Black /></tr>
</div>
</table>