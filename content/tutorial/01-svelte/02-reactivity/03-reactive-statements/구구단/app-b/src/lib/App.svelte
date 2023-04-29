<script>
    import { HtmlTag } from "svelte/internal";

	let number = 0;
	let multiplicationTable = "";

	$: {
		if(number !== 0){
			multiplicationTable = "";
		for (let i = 1; i < 10; i++) {
			multiplicationTable += `${number} * ${i} = ${number * i}<br>`;
		}
	}
		
	}
</script>

<div>
	<button on:click={() => number = 3}>3단</button>
	<button on:click={() => number = 6}>6단</button>
	<button on:click={() => number = 9}>9단</button>
</div>
<div class="container">{@html multiplicationTable}</div>
