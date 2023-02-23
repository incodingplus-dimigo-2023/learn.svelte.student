<script>
	let characters = []

	const createCharacter = () => {
		let HP = Math.floor(Math.random() * 200);
		let ATK = Math.floor(Math.random() * 200);
		let DEF = Math.floor(Math.random() * 200);
		let STAR = Math.floor((HP + ATK + DEF) / 100);
		
		console.log(HP,ATK,DEF,STAR);
		
		return {
			HP,
			ATK,
			DEF,
			STAR
		}
	}

	const spawn = () => {
	}
</script>

<button on:click={spawn}>소환</button>
<div class="container">
	<div class="character">
		<h1></h1>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
	</div>
</div>

