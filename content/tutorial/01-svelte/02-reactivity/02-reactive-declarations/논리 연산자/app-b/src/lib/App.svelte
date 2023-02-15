<script>
	let a = true;
	let b = true;

	$: and = a && b;
	$: or = a || b;
</script>

<div>
	<div>A: {a}</div>
	<div>B: {b}</div>
</div>
<div>
	<div>A && B: {and}</div>
	<div>A || B: {or}</div>
</div>

<style>
	div {
		font-size: 80px;
	}
</style>