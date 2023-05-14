<script>
	let time = 0
	let click = false
</script>

<div 
	on:mousedown={() => {
		click = true
		 let startTime = Date.now()
		
		const timer = setInterval(() => {
			if(click) {
				time = Date.now() - startTime
			} else {
				clearInterval(timer)
			}
		}, 10)
		
	}}
	on:mouseup={() => {
		click = false
	}}
	on:mouseleave={() => {
		click = false
	}}
>
	{click ? "마우스를 누르는 중입니다." : `총 ${time / 1000}초 눌렀습니다.`}
</div>

<style>
	div {
		width: 100vw;
		height: 100vh;
	}
</style>