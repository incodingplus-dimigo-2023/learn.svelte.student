<script>
	let a = true;
	let b = true;
	$: ab1 = a && b;
	$: ab2 = a || b;
</script>

<div>
	<div on:click={() => {a = !a}}>A: {a}</div>
	<div on:click={() => {b = !b}}>B: {b}</div>
</div>
<div>
	<div>A && B: {ab1}</div>
	<div>A || B: {ab2}</div>
</div>

<style>
	div {
		font-size: 80px;
	}
</style>