<script>
	let arr = []
	const MAX = 100

	const generate = () => {
		arr = []
		let i = 1;
		const interval = setInterval(() => {
			arr = [...arr, arr.length + 1];
			if(arr.length === 100) {
				clearInterval(interval)
			}
		}, 100)
	}
    const calculate = () =>{
		arr = [...arr.slice(1)]
    	let i = 2;
			const interval = setInterval(() => {
				let count = 0;
				for(let j = 1; j <= i; j++) {
				if(i % j === 0) {
					count += 1;
				}
			}
			if(count === 2) {
				i += 1;
			} else {
				const index = arr.indexOf(i);
				if(index > -1) {
					arr = [...arr.slice(0, index), ...arr.slice(index + 1)];
				}
				i++
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
