<script>
	let number = 0;
	let multiplicationTable = "";
	let arr = Array(9);

	$: {
		multiplicationTable = arr.join('\n');
	}

	const setNumber = (num) => {
		number = num;
		arr = Array(9);

		for (let i = 0; i < 9; i++) {
			arr[i] = `${number} * ${i + 1} = ${number * (i + 1)}`;
		}

	};
</script>

<div>
	<button on:click={() => setNumber(3)}>3단</button>
	<button on:click={() => setNumber(6)}>6단</button>
	<button on:click={() => setNumber(9)}>9단</button>
</div>

<div>{multiplicationTable}</div>