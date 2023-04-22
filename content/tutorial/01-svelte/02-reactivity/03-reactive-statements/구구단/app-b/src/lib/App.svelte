<script>
	let number = 0;
	let multiplicationTable = "";
	let d = document.querySelector('script + div > div');
	$: {
		if(number === 3){
			for(let i = 1; i < 10; i++){
        d.innerHTML = `3 × ${i} = ${3 * i}`;
    }
		}
		else if(number === 6){
			for(let i = 1; i < 10; i++){
        d.innerHTML = `6 × ${i} = ${6 * i}`;
    }
		}
		else if(number === 9){
			for(let i = 1; i < 10; i++){
        d.innerHTML = `9 × ${i} = ${9 * i}`;
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