<script>
	let number = 0;
	let multiplicationTable = "";

	$: { 
		if(number !== 0){
			for(let i = 0; i < 9; i++){
			multiplicationTable += `${number} * ${i+1} = ${number * (i+1)}<br>`
			}
		}		
	}

	const setNumber = (num) => {
		number = num;
		multiplicationTable = "";
	}
</script>

<div>
	<button on:click={() => setNumber(3)}>3단</button>
	<button on:click={() => setNumber(6)}>6단</button>
	<button on:click={() => setNumber(9)}>9단</button>
</div>
<div>{@html multiplicationTable}</div>