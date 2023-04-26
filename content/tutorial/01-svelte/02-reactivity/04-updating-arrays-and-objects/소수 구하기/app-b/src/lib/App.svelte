<script>
	let arr = []
	const MAX = 100

	const generate = () => {
		arr = []

		let i = 1;
		const interval = setInterval(() => {
			for( i = 1; i <= 100; i++){
				arr = [...arr,i];
				if(i === MAX){
					clearInterval(interval);
					arr = [];
				}
			}
		}, 100)
	}

	const calculate = () => {
		arr = [...arr.slice(1)]

		let i = 2;
		let j = 1;
		const interval = setInterval(() => {
			if(arr[j]%i === 0){
				arr = [...arr.slice(0,j),...arr.slice(j+1)];
			}
			j += 1;
			if(i === MAX){
				i = 2;
				arr = [];
				clearInterval(interval);
			}
			if(j === MAX){
				i += 1;
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
