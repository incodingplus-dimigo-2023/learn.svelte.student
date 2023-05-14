<script>
	let number = 5;
	let interval = null;
	const reset = () => {
		clearInterval(interval);
		number = 5;
	};
	const pause = () => {
		clearInterval(interval);
	};
	const start = () => {
		interval = null
		if(interval === null) {
			interval = setInterval(() => {
			number -= 1;
		}, 1000);
		}

	};
	$: if(number === 0) {
			alert('종료');
			clearInterval(interval);
		}
		
</script>
<div>
	<div class="number">{number}</div>
</div>
<div>
	<button on:click={start}>시작</button>
	<button on:click={pause}>정지</button>
	<button on:click={reset}>초기화</button>
</div>

<style>
	.number {
		font-size: 100px;
	}
</style>
