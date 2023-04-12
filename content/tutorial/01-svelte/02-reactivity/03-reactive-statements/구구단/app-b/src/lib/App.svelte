<script>
	let number = 0;
	let multiplicationTable = "";

	$: {
		for(let i = 0; i < 10; i++){
			multiplicationTable += `${number} * ${i} = ${number*i}`;
		}
		console.log(multiplicationTable);
	}

	const setNumber = (num) => {
		number = num
	}
</script>

<div>
	<button on:click={() => setNumber(3)}>3단</button>
	<button on:click={() => setNumber(6)}>6단</button>
	<button on:click={() => setNumber(9)}>9단</button>
</div>
<div></div>