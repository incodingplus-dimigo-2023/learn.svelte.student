<script>
	let arr = []
	const MAX = 100

	const generate = () => {
		arr = []
		let i = 0;
		const interval = setInterval(() => {
			i += 1;
			arr = [...arr,i];
			if(i === MAX){
					clearInterval(interval);
				}
		}, 100)
	}

		const isPrime = (n) => {
		if(n < 2) return false;
		for(let i = 2; i <= Math.sqrt(n); i++){
			if(n % i === 0) return false;
		}
		return true;
	}

	const calculate = () => {
		arr = [...arr.slice(1)];
		let j = 2;
		const setT = setInterval(()=>{
			if(j >= arr.length){
				clearInterval(setT);
				return;
			}
			if(isPrime(arr[j])){
				j += 1;
			}else{
				arr = [...arr.slice(0,j),...arr.slice(j+1)];
			}
		},100)
	};
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
