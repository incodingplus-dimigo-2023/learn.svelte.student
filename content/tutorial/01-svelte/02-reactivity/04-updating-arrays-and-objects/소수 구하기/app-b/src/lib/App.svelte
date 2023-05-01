<script>
	let arr = []
	const MAX = 100

$: {
	console.log(arr)
}
	const generate = () => {

		const interval = setInterval(() => {
			if(arr.length == MAX){
						clearInterval(interval)
			}
				
			else{arr = [...arr, arr.length+1]}
		}, 100)
	}

	const calculate = () => {
		arr = [...arr.slice(1)]

		let i = 2;
		const interval = setInterval(() => {
			
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