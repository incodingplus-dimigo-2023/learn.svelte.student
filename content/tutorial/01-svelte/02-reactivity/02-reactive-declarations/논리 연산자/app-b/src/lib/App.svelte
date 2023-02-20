<script>
	let a = true;
	let b = true;
	let A = true;
	let B = true;
	const aclick = () => {
		if(a ===true){
			a = false;
		}else a = true;
	}
	const bclick = () => {
		if(b ===true){
			b = false;
		}else b = true;
	}
	
	$: {if(a === true&&b === true){
			A = true;
		}else if(a === false&&b === false){
			A = false;
		}else if(a === true&&b === false){
			A = false;
		}else if(a === false&&b === true){
			A = false;
		}}
	$: {if(a === true&&b === true){
			B = true;
		}else if(a === false&&b === false){
			B = false;
		}else if(a === true&&b === false){
			B = true;
		}else if(a === false&&b === true){
			B = true;
		}}		
	
</script>

<div>
	<div on:click={aclick}>A: {a}</div>
	<div on:click={bclick}>B: {b}</div>
</div>
<div>
	<div>A && B: {A}</div>
	<div>A || B: {B}</div>
</div>

<style>
	div {
		font-size: 80px;
	}
</style>