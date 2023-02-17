<script>
	let number = 0;
	let click = 0;
	let multiplicationTable = "";
	const con = document.querySelector('.con');
	let arr = [];
	const divs = [];
	for(let i = 1; i < 10; i++){
		arr.push(i);
		let div = document.createElement("div");
		divs.push(div);
		con.appendChild(div);
	}
	$: {
		for(let i = 1; i < 10; i++){
			con.children[i-1].innerHTML = `${number}*${i}=${number*i}`
		}
		
	}

	const setNumber = (num) => {
		click++
		number = num;
	}
</script>
<div>
	<button on:click={() => setNumber(3)}>3단</button>
	<button on:click={() => setNumber(6)}>6단</button>
	<button on:click={() => setNumber(9)}>9단</button>
</div>
<div class="con"></div>