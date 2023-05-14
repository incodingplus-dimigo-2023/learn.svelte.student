<script>
	import Black from "./Black.svelte";
	import White from "./White.svelte";
</script>

<table>
	<tr>
		<td> <Black /> </td>
		<td> <White /> </td>
		<td> <Black /> </td>
		<td> <White /> </td>
	</tr>
	<tr>
		<td> <White /> </td>
		<td> <Black /> </td>
		<td> <White /> </td>
		<td> <Black /> </td>
	</tr>
	<tr>
		<td> <Black /> </td>
		<td> <White /> </td>
		<td> <Black /> </td>
		<td> <White /> </td>
	</tr>
	<tr>
		<td> <White /> </td>
		<td> <Black /> </td>
		<td> <White /> </td>
		<td> <Black /> </td>
	</tr>
</table>

<style>
	.flex-container {
		display: inline-flex;
	}
	.flex-container > div {
		display: flex;
	}
	td{
        padding: 0px;
	}
</style>
