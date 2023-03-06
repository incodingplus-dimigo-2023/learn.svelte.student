<script>
	const colors = ["red", "blue", "green"]
	let arr = ["", "", ""]
</script>

<div 
	class={arr[0]} 
	on:click|stopPropagation|self={() => arr[0] = colors[0]} 
	on:contextmenu|preventDefault|stopPropagation|self={() => arr[0] = ""}
>
	<div 
		class={arr[1]} 
		on:click|stopPropagation|self={() => arr[1] = colors[1]} 
		on:contextmenu|preventDefault|stopPropagation|self={() => arr[1] = ""}
	>
		<div 
			class={arr[2]} 
			on:click|stopPropagation|self={() => arr[2] = colors[2]} 
			on:contextmenu|preventDefault|stopPropagation|self={() => arr[2] = ""}>
		</div>
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