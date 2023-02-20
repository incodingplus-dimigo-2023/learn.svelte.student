<script>
	let number = 5;
	let interval = null;
	let isRightMouseDown = false;

	const reset = () => {
		location.reload();
	};
	const pause = () => {
		isRightMouseDown = false;
	};
	const start = () => {
		isRightMouseDown = true;
	};

	// 여기에 코드를 작성해보세요.

	const loop = () => {
		if (isRightMouseDown) number -= 1;
		if (number == 0) {
			alert("종료");
			return;
		}

		setTimeout(loop, 1000);
	};
	loop();
</script>

<div>
	<div class="number">{number}</div>
</div>
<div>
	<button on:mouseup={start}>시작</button>
	<button on:mouseup={pause}>일시 정지</button>
	<button on:mouseup={reset}>초기화</button>
</div>

<style>
	.number {
		font-size: 100px;
	}
</style>
