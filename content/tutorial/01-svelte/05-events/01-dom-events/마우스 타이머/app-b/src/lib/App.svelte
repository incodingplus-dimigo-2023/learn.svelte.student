<script>
    import { now } from "svelte/internal";

	let time = 0
	let isMouseDown = false
</script>

<div on:mousedown = {e =>
	{
		time = Date.now()
		isMouseDown = true
	}
} on:mouseup = {e => {
	{
		isMouseDown = false
		time = Date.now() - time
	}
}

}>
	{isMouseDown ? "마우스를 누르는 중입니다." : `총 ${time / 1000}초 눌렀습니다.`}
</div>

<style>
	div {
		width: 100vw;
		height: 100vh;
	}
</style>
pi