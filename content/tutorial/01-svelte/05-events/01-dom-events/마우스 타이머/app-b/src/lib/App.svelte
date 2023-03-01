<script>
	let time = 0;
	let isMouseDown = false;

	const increment = (e) => {
		time = 0;
		const startTime = Math.floor(new Date());
		if (e.type === "mousedown") {
			isMouseDown = true;
		} else if (e.type === "mouseup") {
			isMouseDown = false;
		}
		checkTime;
	};
	const checkTime = (e) => {
		time++;
	};
	if (isMouseDown) {
		setTimeout(checkTime, 1);
	}
</script>

<div on:mousedown={increment} on:mousedown={checkTime} on:mouseup={increment}>
	{isMouseDown
		? "마우스를 누르는 중입니다."
		: `총 ${time / 1000}초 눌렀습니다.`}
</div>

<style>
	div {
		width: 100vw;
		height: 100vh;
	}
</style>
