<script>
	let number = 5;
  let count = 2;

	const reset = () => {
		number = 5;
	};
	const pause = () => {
		count++;
	};
	const start = () => {
			let interval = setInterval(function() {
				if(count % 2 === 0){
  number--;
  if (number === 0) {
    clearInterval(interval);
	}
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
