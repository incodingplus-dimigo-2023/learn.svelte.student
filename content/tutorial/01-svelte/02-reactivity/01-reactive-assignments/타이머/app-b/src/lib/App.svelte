<script>
	let number = 5;
	let interval = null;
  let good = true;


	const reset = () => {
		number = 5;
	};
	const pause = () => {
		if(good){
      good = false;
    } else {
      good = true;
    }
	};
	const start = () => {
    if(good){
		setInterval(() => {
		number -= 1;
    if(number === 0){
      alert("종료")
      good = false;
    }
    }
	, 1000);
  }
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
