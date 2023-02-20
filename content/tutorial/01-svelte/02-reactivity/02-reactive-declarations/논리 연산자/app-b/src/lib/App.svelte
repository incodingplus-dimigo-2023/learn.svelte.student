<script>
	let a = true;
	let b = true;
	const changeA = () => {
		a = Boolean(!a)
	};
	const changeB = () => {
		b = Boolean(!b)

	};
</script>

<div>
	<div on:click={changeA}>A: {a}</div>
	<div on:click={changeB}>B: {b}</div>
</div>
<div>
	<div>A && B: {Boolean((a && b))}</div>
	<div>A || B: {Boolean((a || b))}</div>
</div>

<style>
	div {
		font-size: 80px;
	}
</style>
