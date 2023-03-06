<script>
	import Black from "./Black.svelte";
	import White from "./White.svelte";
</script>

<style>
	.flex-container{
		width: 200px;
		height: 200px;
		border: 1px solid black;
		border-collapse: collapse;
	}
	.flex-container  div{
		width: 50px;
		height: 50px;
	}
</style>

<table class="flex-container">
	<tr>
		<td>
			<div><Black/></div>
		</td>
		<td>
			<div><White/></div>
		</td>
		<td>
			<div><Black/></div>
		</td>
		<td>
			<div><White/></div>
		</td>
	</tr>
	<tr>
		<td>
			<div><White/></div>
		</td>
		<td>
			<div><Black/></div>
		</td>
		<td>
			<div><White/></div>
		</td>
		<td>
			<div><Black/></div>
		</td>
	</tr>
	<tr>
		<td>
			<div><Black/></div>
		</td>
		<td>
			<div><White/></div>
		</td>
		<td>
			<div><Black/></div>
		</td>
		<td>
			<div><White/></div>
		</td>
	</tr>
	<tr>
		<td>
			<div><White/></div>
		</td>
		<td>
			<div><Black/></div>
		</td>
		<td>
			<div><White/></div>
		</td>
		<td>
			<div><Black/></div>
		</td>
	</tr>
</table>
	
	
	
	
