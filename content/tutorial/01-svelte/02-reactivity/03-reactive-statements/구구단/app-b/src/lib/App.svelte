<script>
	let number = 0;
	let multiplicationTable = "";
	let arr = Array(9).fill(0).map((_, i) => i + 1);

	$: {

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
<div>
	{@html arr.map(v => `${number} X ${v} = ${v * number}` ).join('<br>')}
</div>