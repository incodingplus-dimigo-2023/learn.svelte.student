<script>
	let number = 0;
	let multiplicationTable = "";
	const div = document.querySelector(".container");

	$: {
		for (let i = 0; i < 10; i++) {
			multiplicationTable += `${number} * ${i} = ${number * i}`;
		}
	}
	const setNumber = (num) => {
		number = num;
		div.innerHTML = multiplicationTable;
	};
</script>

<div>
	<button on:click={() => setNumber(3)}>3단</button>
	<button on:click={() => setNumber(6)}>6단</button>
	<button on:click={() => setNumber(9)}>9단</button>
</div>
<div class="container"></div>
