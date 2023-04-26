<script>
	let time = 0;
	let isMouseDown = false;
	let setT;
</script>

<div on:mousedown={()=>{isMouseDown = true; time = 0; setT = setInterval(()=>{time += 1;},1)}} on:mouseup={()=>{isMouseDown = false; clearInterval(setT)}}>
	{isMouseDown ? "마우스를 누르는 중입니다." : `총 ${time / 1000}초 눌렀습니다.`}
</div>

<style>
	div {
		width: 100vw;
		height: 100vh;
	}
</style>