<script>
	let characters = []


	const createCharacter = () => {
		let HP = Math.floor(Math.random() * 200) + 1;
		let ATK = Math.floor(Math.random() * 200) + 1;
		let DEF = Math.floor(Math.random() * 200) + 1;
		let STAR = Math.floor(Math.random() * 200) + 1;
		
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

<button>소환</button>
<div class="container">
	<div class="character">
		<h1></h1>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
	</div>
</div>

