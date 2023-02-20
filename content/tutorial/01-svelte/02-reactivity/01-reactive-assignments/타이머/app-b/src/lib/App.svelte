<script>
	let number = 5;
	let click = 0;
	let interval = null

	const reset = () => {
		number = 5
		if(click === 1){
			clearInterval(interval);
			click--
		}
	};
	const pause = () => {
		clearInterval(interval);
	};
	const start = () => {
		click++
		interval = setInterval(() => {
			number--
			if(number === 0){
				clearInterval(interval);
				alert('종료');
			}
		}, 1000);
	};
	
</script>

<div>
	<div class="number">{number}</div>
</div>
<div>
	<button on:click={start}>시작</button>
	<button on:click={pause}>일시 정지</button>
	<button on:click={reset}>초기화</button>
</div>

<style>
	.number {
		font-size: 100px;
	}
</style>
