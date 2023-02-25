<script>
	import Black from "./Black.svelte";
	import White from "./White.svelte";	

	const con = document.querySelector('.flex-container');
	for(let i =0 ; i< 4; i++) {
		const div = document.createElement('div')
		con.append(div);
		for(let j = 0; j < 4; j ++ ) {
			if(j % 2 == 0) {
				<White />
			} else {
				
			}
		}
	}
</script>

<style>
	.flex-container{
		display: inline-flex;
	}
	.flex-container > div{
		display:flex;
	}
</style>

<div class="flex-container">
</div>
