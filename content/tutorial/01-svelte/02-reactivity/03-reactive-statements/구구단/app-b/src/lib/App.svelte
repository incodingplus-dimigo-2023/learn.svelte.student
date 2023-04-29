<script>
	let number = 0;
	let multiplicationTable = "";
	
	$: {

	}

	const setNumber = (num) => {
		number = num
		let number2 = 0;
		document.querySelector('.container').innerHTML = ''
		for(let i = 0; i < 9; i++){
			number2 += 1
			multiplicationTable += `${number} * ${number2} = ${number * number2}`
			document.querySelector('.container').innerHTML += `<div>${number} * ${number2} = ${number * number2}</div>`
			document.querySelector('.container').innerHTML += `<div>\n</div>`
		}
	}
</script>

<div>
	<button on:click={() => setNumber(3)}>3단</button>
	<button on:click={() => setNumber(6)}>6단</button>
	<button on:click={() => setNumber(9)}>9단</button>
</div>
<div class="container">{multiplicationTable}</div>