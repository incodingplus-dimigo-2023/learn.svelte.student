<script>
	let html = `<img src='/img.gif' style="width:10%;height:10%;">`;
	let str = '';
	let count = 0;

	let setT = setInterval(()=>{
		str += html;
		count += 1;
		if(count === 100){
			clearInterval(setT);
		}
	},10)
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
