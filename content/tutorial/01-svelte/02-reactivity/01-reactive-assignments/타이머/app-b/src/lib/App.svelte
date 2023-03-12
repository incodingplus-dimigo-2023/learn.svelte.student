<script>
	let number = 5;
	let interval = null;
	let click = 0;
	const reset = () => {
		number = 5
		if(interval !== null){
			if(click === 1){
				clearInterval(interval);
				click--
			}
		}
	};
	const pause = () => {
		clearInterval(interval)
	};
	const start = () => {
		click++
		interval = setInterval(() => {
			number--
			if(number === 0){
				alert('종료');
				clearInterval(interval);
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
