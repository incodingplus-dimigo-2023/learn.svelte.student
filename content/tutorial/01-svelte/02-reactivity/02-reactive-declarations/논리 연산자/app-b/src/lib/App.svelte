<script>
	let a = true;
	let b = true;
	$: or = a && b;
	$: and = a || b;

	const changeA = () => {
		a != a;
	};
	const changeB = () => {
		b != b;
	};
</script>

<div>
	<div on:keypress={changeA}>A: {a}</div>
	<div on:keypress={changeB}>B: {b}</div>
</div>
<div>
	<div>A && B: {or}</div>
	<div>A || B: {and}</div>
</div>

<style>
	div {
		font-size: 80px;
	}
</style>
