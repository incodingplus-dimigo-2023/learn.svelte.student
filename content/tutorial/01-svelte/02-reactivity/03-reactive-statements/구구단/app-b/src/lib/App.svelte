<script>
    import { HtmlTag } from "svelte/internal";

	let number = 0;
	let multiplicationTable = "";

	$: for(let i= 1; i <= 9; i++) {
		multiplicationTable += `${number} * ${i} = ${number * i} <br>` ;
	}

	const setNumber = (num) => {
		number = num
		multiplicationTable = '';
	}
</script>

<div>
	<button on:click={() => setNumber(3)}>3단</button>
	<button on:click={() => setNumber(6)}>6단</button>
	<button on:click={() => setNumber(9)}>9단</button>
</div>
<div>
	{@html multiplicationTable}
</div>