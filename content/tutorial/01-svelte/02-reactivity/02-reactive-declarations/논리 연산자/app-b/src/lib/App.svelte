<script>
	let a = true;
	let b = true;
	function togglea() {
		a = !a;
	}
	function toggleb() {
		b = !b;
	}
</script>

<div>
	<div on:mousedown={togglea}>A: {a}</div>
	<div on:mousedown={toggleb}>B: {b}</div>
</div>
<div>
	<div>A && B: {a}</div>
	<div>A || B: {b}</div>
</div>

<style> 
	div {
		font-size: 80px;
	}
</style>