<script>
	import Black from "./Black.svelte";
	import White from "./White.svelte";
</script>

<style>
	.flex-container{
		display: inline-flex;
	}
	.flex-container > div{
		display:flex;
	}
</style>

  <div class=".flex-container">
	<div>
		<div class="even"></div>
	  	<div class="even"></div>
		<div class="even"></div>
	  	<div class="even"></div>
	</div>
	<div>
		<div class="odd"></div>
	  	<div class="odd"></div>
		<div class="odd"></div>
	  	<div class="odd"></div>
	</div>
	<div>
		<div class="even"></div>
	  	<div class="even"></div>
		<div class="even"></div>
	  	<div class="even"></div>
	</div>
	<div>
		<div class="odd"></div>
	  	<div class="odd"></div>
		<div class="odd"></div>
	  	<div class="odd"></div>
	</div>
 </div>