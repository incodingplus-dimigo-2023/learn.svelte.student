<script>
	const colors = ["red", "blue", "green"];
	let arr = ["", "", ""];

</script>

<div
	class={arr[0]}
	on:click={() => (arr[0] = colors[0])}
	on:contextmenu|preventDefault={() => (arr[0] = "")}
>
	<div
		class={arr[1]}
		on:click|stopPropagation={() => (arr[1] = colors[1])}
		on:contextmenu|stopPropagation|preventDefault={() => (arr[1] = "")}
	>
		<div
			class={arr[2]}
			on:click|stopPropagation={() => (arr[2] = colors[2])}
			on:contextmenu|stopPropagation|preventDefault={() => (arr[2] = "")}
		/>
	</div>
</div>

<style>
	div {
		padding: 20px;
		width: fit-content;
		border-radius: 9999px;
		border: 1px solid black;
		background-color: white;
	}
	.red {
		background-color: red;
	}
	.green {
		background-color: green;
	}
	.blue {
		background-color: blue;
	}
</style>
