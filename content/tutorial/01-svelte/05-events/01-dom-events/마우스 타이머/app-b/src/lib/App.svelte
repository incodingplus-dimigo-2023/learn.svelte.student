<script>
	let time = 0;
	let isMouseDown = false;
	let setT = 0;
	function stop() {
		console.log("stopped");
		clearInterval(setT);
	}
	/**
	 *
	 * @param {MouseEvent} e
	 */
	const increment = (e) => {
		if (e.button !== 0) return;
		if (e.type === "mousedown") {
			time = 0;
			isMouseDown = true;
			setT = setInterval(() => {
				time++;
			}, 1);
		} else if (e.type === "mouseup") {
			isMouseDown = false;
			stop();
		}
	};
</script>

<div on:mousedown={increment} on:mouseup={increment}>
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
