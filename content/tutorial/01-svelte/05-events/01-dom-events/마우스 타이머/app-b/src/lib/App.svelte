<script>
	let time = 0;
	let isMouseDown = false;
	let interval = null;
	
</script>

<div on:mousedown={() => {
		time = 0;
		isMouseDown = true; 
		//console.log("MouseDown");

		interval = setInterval(() => {
			time += 4;
		},4);
	}} 
	on:mouseup={() => {
		clearInterval(interval);
		isMouseDown = false;
	}}>
	{isMouseDown ? "마우스를 누르는 중입니다." : `총 ${time / 1000}초 눌렀습니다.`}
</div>

<style>
	div {
		width: 100vw;
		height: 100vh;
	}
</style>