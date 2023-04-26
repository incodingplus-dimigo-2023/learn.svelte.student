<script>
	let number = 5;
	let interval = () => {
		if(number == 0){
			console.log('끝났습니다')
		}
		else{
					number = number -1;
		}

		};

			let sta;
	const reset = () => {
				number = 5
		clearInterval(sta)
	};
	const pause = () => {
		clearInterval(sta)
	};
	const start = () => {
		clearInterval(sta)
		sta = setInterval(interval, 1000)
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

