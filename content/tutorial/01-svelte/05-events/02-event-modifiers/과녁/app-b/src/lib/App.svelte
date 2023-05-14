<script>
	const colors = ["red", "blue", "green"];
	let arr = ["", "", ""];
</script>

<div class="target">
	<div class="ring1">
		<div
			class={arr[0] ? colors[0] : "white"}
			on:click={() => {
				arr[0] = colors[0];
			}}
			on:contextmenu={(event) => {
				event.preventDefault();
				arr[0] = "";
			}}
		></div>
	</div>
	<div class="ring2">
		<div
			class={arr[1] ? colors[1] : "white"}
			on:click={() => {
				arr[1] = colors[1];
			}}
			on:contextmenu={(event) => {
				event.preventDefault();
				arr[1] = "";
			}}
		></div>
	</div>
	<div class="ring3">
		<div
			class={arr[2] ? colors[2] : "white"}
			on:click={() => {
				arr[2] = colors[2];
			}}
			on:contextmenu={(event) => {
				event.preventDefault();
				arr[2] = "";
			}}
		></div>
	</div>
</div>

<style>
	.target {
		width: 300px;
		height: 300px;
		position: relative;
	}

	.ring1, .ring2, .ring3 {
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
	}

	.ring1 {
		width: 200px;
		height: 200px;
		border: 2px solid black;
		border-radius: 50%;
	}

	.ring2 {
		width: 140px;
		height: 140px;
		border: 2px solid black;
		border-radius: 50%;
	}

	.ring3 {
		width: 80px;
		height: 80px;
		border: 2px solid black;
		border-radius: 50%;
	}

	.ring1 > div, .ring2 > div, .ring3 > div {
		width: 100%;
		height: 100%;
		border-radius: 50%;
	}

	.white {
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
