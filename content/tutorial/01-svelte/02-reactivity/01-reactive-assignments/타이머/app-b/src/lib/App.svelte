<script>
	let number = 5;
	let interval = null;
	let play = 0;
	const reset = () => {
		clearInterval(interval);
		number = 5;
		play = 0;
	};
	const pause = () => {
		if (play === 1){
			clearInterval(interval);
			play = 0;
		}
	};
	const start = () => {
		if (play === 0){
			interval = setInterval(print, 1000);
			play = 1;
		};
	};
	let print = () => {
		if(number > 0){
			number--;
		};
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
