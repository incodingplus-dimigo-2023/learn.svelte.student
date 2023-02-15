<script>
	let number = 0;
	let multiplicationTable = "";


	/*const setNumber = (num) => {
		number = num
		multiplicationTable = ""
		for(let i = 1; i <= 9; i++) {
			multiplicationTable += `<div>${number} * ${i} = ${number * i}</div>`;
		}
	}
	*/
	
	const setNumber = (num) => {
		number = num
		let main = document.querySelector('.main');
		main.innerHTML = '';
		for(let i = 1; i <= 9; i++) {	
			const div = document.createElement('div');	
			div.innerHTML = `${number} * ${i} = ${number * i}`;
			main.append(div);
		}
	}
	
</script>

<div>
	<button on:click={() => setNumber(3)}>3단</button>
	<button on:click={() => setNumber(6)}>6단</button>
	<button on:click={() => setNumber(9)}>9단</button>
</div>
<div class="main">{multiplicationTable}</div>