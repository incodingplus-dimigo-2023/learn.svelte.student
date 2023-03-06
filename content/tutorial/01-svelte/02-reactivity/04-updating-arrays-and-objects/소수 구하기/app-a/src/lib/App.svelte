<script>
	let arr = []
	const MAX = 100

	const generate = () => {
		arr = []
		let i = 1;
		const interval = setInterval(() => {
			if(i === 100){
				clearInterval(interval);
			}
			arr = [...arr,i];
			i++
		}, 10)//100까지 arr에 넣어라, 그럼 clearinterval
	}

	const calculate = () => {
		arr = [...arr.slice(1)]

		let i = 2;
		const interval = setInterval(() => {
			for(let k = i; k <= 100; k++){
				for(let j = 2; j*j<=k;j++){
					if(k%j === 0){
						i = k + 1;
						let index = arr.indexOf(k);
						arr = [...arr.slice(0, index), ...arr.slice(index + 1)];
						return
						clearInterval(interval);
					}
				}
			}
		}, 100)
	}
	/*소수판별&지우기
	let i = 2
	for(let k = i; k <= 100; k++){
		for(let j = 2; j*j<=k;j++){
			if(k%j === 0){
				i = k + 1;
				let index = arr.indexOf(k);
				arr = [...arr.slice(0, index), ...arr.slice(index + 1)];
				return
			}
		}
	}
	*/
</script>

<button on:click={generate}>생성</button>
<button on:click={calculate}>계산</button>

<div class="container">
	{@html arr.map(n => `<div>${n}</div>`).join("")}
</div>

<style>
	.container {
		display: flex;
		flex-wrap: wrap;
		width: 100%;
	}

	:global(div) {
		width: 5vw;
		height: 5vw;
	}

</style>
