<script>
	let time = 0
	let isMouseDown = false;
	let pre = 0;

	const down = () =>{
		isMouseDown = true;
		pre = Date.now();
	}
	const up = () =>{
		isMouseDown = false;
		time = Date.now();
	}

</script>

<div>
	{isMouseDown ? "마우스를 누르는 중입니다." : `총 ${time / 1000}초 눌렀습니다.`}
</div>

<style>
	div {
		width: 100vw;
		height: 100vh;
	}
</style>