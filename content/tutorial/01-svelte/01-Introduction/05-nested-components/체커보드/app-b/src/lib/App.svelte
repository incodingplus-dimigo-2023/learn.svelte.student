<script>
	import Black from "./Black.svelte";
	import White from "./White.svelte";
</script>

<div class="flex-container">
	<table>
		<tr>
			<td>
				<Black />
			</td>
			<td>
				<White />
			</td>
			<td>
				<Black />
			</td>
			<td>
				<White />
			</td>
		</tr>
		<tr>
			<td>
				<White />
			</td>
			<td>
				<Black />
			</td>
			<td>
				<White />
			</td>
			<td>
				<Black />
			</td>
		</tr>
		<tr>
			<td>
				<Black />
			</td>
			<td>
				<White />
			</td>
			<td>
				<Black />
			</td>
			<td>
				<White />
			</td>
		</tr>
		<tr>
			<td>
				<White />
			</td>
			<td>
				<Black />
			</td>
			<td>
				<White />
			</td>
			<td>
				<Black />
			</td>
		</tr>
	</table>
</div>

<style>
	.flex-container{
		display: inline-flex;
	}
	.flex-container > div{
		display:flex;
	}
</style>