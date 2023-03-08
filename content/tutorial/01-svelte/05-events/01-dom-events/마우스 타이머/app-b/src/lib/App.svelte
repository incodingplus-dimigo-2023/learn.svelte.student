<script>
	let time = 0
	let set = null;
	let isMouseDown = false
	let pre = Date.now();
	const mouseclick = () => {
		isMouseDown = true;
		pre = Date.now()
	}
	const mouseup = () => {
		isMouseDown = false;
		time = Date.now() - pre
	}
</script>

<div on:mousedown={mouseclick} on:mouseup={mouseup}>
	{isMouseDown ? "마우스를 누르는 중입니다." : `총 ${time / 1000+1}초 눌렀습니다.`}
</div>

<style>
	div {
		width: 100vw;
		height: 100vh;
	}
</style>