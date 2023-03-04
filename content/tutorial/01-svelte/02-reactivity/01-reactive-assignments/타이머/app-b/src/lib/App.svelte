<script>
	const btn =document.querySelector(',btn');
	let number = 5;	
	let set = null;

	const interval = () => {
		number -= 1;
	}
	const reset = () => {
		number = 5;
	};
	const pause = () => {
		clearInterval(set);
	};
	const start = () => {
		if(btn.classList.contains('run')) return;
		interval()
		set = setInterval(interval, 1000);
		btn.classList.add('run');
		if(number == 0) {
			clearInterval(set);
		}
	};
</script>

<div>
	<div class="number">{number}</div>
</div>
<div>
	<button class="btn" on:click={start}>시작</button>
	<button on:click={pause}>일시 정지</button>
	<button on:click={reset}>초기화</button>
</div>

<style>
	.number {
		font-size: 100px;
	}
</style>
