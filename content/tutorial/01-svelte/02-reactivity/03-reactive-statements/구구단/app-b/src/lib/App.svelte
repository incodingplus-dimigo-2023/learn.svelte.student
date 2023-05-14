<script>
	let number = 0;
	let multiplicationTable = "";

	$: {
		for(let i = 0; i < (number * 10); i++){
			if(i % number === 0){
				multiplicationTable = multiplicationTable + `${number} x ${i / 3} = ${i}`
			}
		}
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