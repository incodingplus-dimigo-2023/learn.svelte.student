<script>
	let time = 0
	let set = 0;
	let isMouseDown = false
	const plus = () => {time++};
	const mouseclick = () => {
		time = 0;
		isMouseDown = true;
		plus()
		// @ts-ignore
		set = setInterval(plus, 1000)
	}
	const mouseup = () => {
		isMouseDown = false;
		clearInterval(set);
	}
</script>

<div on:mousedown={mouseclick} on:mouseup={mouseup}>
	{isMouseDown ? "마우스를 누르는 중입니다." : `총 ${time / 1000}초 눌렀습니다.`}
</div>

<style>
	div {
		width: 100vw;
		height: 100vh;
	}
</style>