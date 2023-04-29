<script>
	let a = true;
	let b = true;
	
	const a_click= () => {
		a = !a
	}
	const b_click = () => {
		b = !b
	}
</script>

<div>
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div on:click = {a_click}>A:{a} </div>
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div on:click = {b_click}>B:{b} </div>
</div>
<div>
	<div>A && B:{a && b} </div>
	<div>A || B:{a || b} </div>
</div>

<style>
	div {
		font-size: 80px;
	}
</style>