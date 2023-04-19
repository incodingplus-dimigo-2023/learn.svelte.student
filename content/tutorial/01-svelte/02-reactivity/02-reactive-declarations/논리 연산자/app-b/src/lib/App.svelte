<script>
	let a = true;
	let b = true;

	const booleana = () => {
		a = !a; // a의 값을 토글
		//b = !b; // b의 값을 토글
	}
	const booleanb = () =>{
		b = !b;
	}
</script>

<div>
	<div on:click={booleana}>A: {a.toString()} </div>
	<div on:click={booleanb}>B: {b.toString()} </div>
</div>
<div>
	<div>A && B: {(a && b).toString()} </div>
	<div>A || B: {(a || b).toString()} </div>
</div>

<style>
	div {
		font-size: 80px;
	}
</style>