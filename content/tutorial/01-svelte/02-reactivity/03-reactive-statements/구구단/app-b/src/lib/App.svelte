<script>
	let number = 0;
	let multiplicationTable = "";

	$: {
		multiplicationTable = '';
		if(number > 0){
		for (let i = 1 ; i <= 9; i ++){
			multiplicationTable += `${number} * ${i} = ${number * i} \n`
			console.log(multiplicationTable)
		}
		}
	}

	const setNumber = (num) => {
		number = num;
		console.log(number)
	}
</script>

<div>
	<button on:click={() => setNumber(3)}>3단</button>
	<button on:click={() => setNumber(6)}>6단</button>
	<button on:click={() => setNumber(9)}>9단</button>
	<br>
	{multiplicationTable}
</div>
<div></div>