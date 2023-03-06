<script>
	let a = true;
	let b = true;
	$: or = a && b;
	$: and = a || b;

	function changeA() {
		a = !a;
	};
	function changeB() {
		b = !b;
	};
</script>

<div>
	<div on:click={changeA}>A: {a}</div>
	<div on:click={changeB}>B: {b}</div>
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
