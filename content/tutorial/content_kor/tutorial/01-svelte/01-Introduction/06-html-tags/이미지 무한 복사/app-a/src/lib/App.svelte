<script>
	let html = `<img src='/img.gif' style="width:10%;height:10%;">`;
	let str = "";
	let link = `${html}`;
	let count = 1;
	let setT = 0;
	const div = document.querySelector("div");
	// str = html;
	function Nayn() {
		str += link;
		requestAnimationFrame(Nayn);
	}
	requestAnimationFrame(Nayn);
</script>

<div>
	{@html str}
</div>

<style>
	:global(main) {
		padding: 0 !important;
	}
	div {
		width: 100vw;
		height: 100vh;
		display: flex;
		flex-wrap: wrap;
		align-content: flex-start;
	}
</style>
