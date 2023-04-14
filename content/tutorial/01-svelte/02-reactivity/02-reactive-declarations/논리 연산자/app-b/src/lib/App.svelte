<script>
	let a = true;
	let b = true;
	$: c = a && b;
	$: d = a || b;

	const toggleA = () => {
		a = !a;
	}

	const toggleB = () => {
		b = !b;
	}
</script>

<div>
	<div on:click={toggleA}>A: {a}</div>
	<div on:click={toggleB}>B: {b}</div>
</div>
<div>
	<div>A && B: {c}</div>
	<div>A || B: {d}</div>
</div>

<style>
	div {
		font-size: 80px;
	}
</style>