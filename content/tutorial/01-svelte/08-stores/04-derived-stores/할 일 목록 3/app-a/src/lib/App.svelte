<script>
	import Input from "./Input.svelte";
	import List from "./List.svelte";
	import Status from "./Status.svelte";

</script>

<div class="container">
	<div>
		<Input />
	</div>
	<div>
		<List />
	</div>
	<div>
		<Status />
	</div>
</div>

<style>
	.container {
		display: flex;
	}

	.container > div {
		width: calc(100% / 3);
		border: 1px solid black;
	}
</style>