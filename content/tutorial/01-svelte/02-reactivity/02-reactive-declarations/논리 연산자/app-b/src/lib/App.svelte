<script>
	let a = true;
	let b = true;
	const ma = () => {
		a = !a
	}
	const mb = () => {
		b = !b
	}
</script>

<div>
	<div on:click={ma}>A: {a}</div>
	<div on:click={mb}>B: {b}</div>
</div>
<div>
	<div>A && B: {a && b}</div>
	<div>A || B: {a || b}</div>
</div>

<style>
	div {
		font-size: 80px;
	}
</style>