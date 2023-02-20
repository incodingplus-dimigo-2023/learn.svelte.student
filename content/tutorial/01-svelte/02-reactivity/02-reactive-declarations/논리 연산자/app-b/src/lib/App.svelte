<script>
	let a = true;
	let b = true;
	let and
	let andval	
	let or
	let orval

	const whatAnB = () => {
		and = a&&b;
	}
	const whatAorB = () => {
		or = a||b;
	}
	whatAnB()
	whatAorB()
</script>

<div>
	<div>A: {@html a}</div>
	<div>B: {@html b}</div>
</div>
<div>
	<div>A && B: {@html and}</div>
	<div>A || B: {@html or}</div>
</div>

<style>
	div {
		font-size: 80px;
	}
</style>