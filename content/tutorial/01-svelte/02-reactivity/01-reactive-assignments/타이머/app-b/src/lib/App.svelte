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
		interval = setInterval(() => {
			number = number - 1;
			if(number === 0) {
				alert('타이머가 종료 되었습니다');
				clearInterval(interval);
			}
		},1000)
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
