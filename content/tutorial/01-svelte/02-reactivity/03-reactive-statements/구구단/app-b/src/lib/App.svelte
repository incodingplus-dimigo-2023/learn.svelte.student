<script>
	let number = 0;
	let multiplicationTable = ``;

	$: {
		if(number !== 0){
			multiplicationTable = ``;
		const grid = Array(9).fill(number).map((arr, i) => { 
   		 return `${Number(arr)} *  ${i + 1} = ${Number(arr) *  (Number(i) + 1)}`
			}).map((arr, i) => {
				multiplicationTable = `${multiplicationTable}<br>${arr}`
			})
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
<div>{@html multiplicationTable}</div>
