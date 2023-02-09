<script>
	let html = `<img src='/img.gif' style="width:10%;height:10%;">`;
	let str = `${html}`;
	let count = 0;
	let setT = 0
	
	setInterval(() => {
		str = `${html}`
		count++;
		for(let i = 0; i <= count; i++){
			str = str + `${html}`;
			if(i === count)break
		};
		if(count === 98){
			count = 97;
		}
	}, 100)
	
	
</script>
<div>
	{@html str}
</div>
<style>
	:global(main){
		padding:0 !important;
	}
	div{
		width:100vw;
		height:100vh;
		display: flex;
		flex-wrap: wrap;
		align-content: flex-start;
	}
</style>