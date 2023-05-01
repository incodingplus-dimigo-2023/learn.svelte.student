<script>
	let a = true;
	let b = true;

	const toga = () =>{
		a = !a
	}

	const togb = () =>{
	b = !b
	}
	
	$: aab = a && b
	$: abb = a || b
	
</script>

<div>
	<div on:click ={toga}>A: {a}</div>
	<div on:click ={togb}>B: {b}</div>

</div>
<div>
	<div>A && B: {aab} </div>
	<div>A || B: {abb} </div>
</div>

<style>
	div {
		font-size: 80px;
	}
</style>