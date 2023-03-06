<script>
	let html = `<img src='/img.gif' style="width:10%;height:20%;">`;
	let str = '';
  setInterval(()=> {
    str = `${str} ${html}`
  }, 1000);


</script>
<br>
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
