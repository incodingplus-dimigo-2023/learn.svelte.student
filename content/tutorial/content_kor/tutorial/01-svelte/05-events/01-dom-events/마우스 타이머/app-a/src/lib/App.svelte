<script>
	let time = 0
	let time_first
	let time_last
	let isMouseDown = false

	
</script>

<div on:mousedown={
	e => {
		time_first = Date.now();
		isMouseDown = true;
	}
} on:mouseup={
	e => {
		time_last = Date.now();
		isMouseDown = false;
	}
}>		
	{isMouseDown ? "마우스를 누르는 중입니다." : `총 ${(Number(time_last) - Number(time_first)) / 1000}초 눌렀습니다.`}
</div>

<style>
	div {
		width: 100vw;
		height: 100vh;
	}
</style>