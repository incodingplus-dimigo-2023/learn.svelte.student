<script>
	let arr = []
	const MAX = 100

	const generate = () => {
		arr = []

		let i = 0;
		const interval = setInterval(() => {
			i = i + 1;
			arr = [...arr, i]
			if(i === MAX) {
				clearInterval(interval)
			}
		}, 1)
	}

	const calculate = () => {
		//arr = [...arr.slice(1)]

		let i = 2;
		const interval = setInterval(() => {
			for(let j = 0; j < MAX; j++) {
				for(let i = 2; i < j; i++) {
					if(arr[i] % i === 0) {
						console.log(i);
						const remove = [...arr.splice(i,1)];
					}
					if(j === MAX - 1) {
						console.log('finish');
						clearInterval(interval);
					}
				}
			}
		}, 100)
	}

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
