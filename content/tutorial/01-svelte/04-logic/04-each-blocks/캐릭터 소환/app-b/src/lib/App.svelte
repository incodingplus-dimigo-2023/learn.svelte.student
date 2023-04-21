<script>
	let characters = [];

	const createCharacter = () => {
		let HP = Math.floor(Math.random()*201);
		let ATK = Math.floor(Math.random()*201);
		let DEF = Math.floor(Math.random()*201);
		let STAR = "";
		let Starcount = Math.floor((HP + ATK + DEF) / 100);

		for(let i = 0; i < Starcount; i++){
			STAR += "★"
		}
		
		return {
			HP,
			ATK,
			DEF,
			STAR
		}
	}

	const spawn = () => {
		characters = [...characters , createCharacter()];
	}
</script>

<button on:click={spawn}>소환</button>

{#each characters as {HP,ATK,DEF,STAR},i}
	<div class="container">
		<div class="character">
			<h1>{i+1}번째 캐릭터</h1>
			<div>체력 : {HP}</div>
			<div>공격력 : {ATK}</div>
			<div>방어력 : {DEF}</div>
			<div>등급 : {STAR}</div>
		</div>
	</div>
{/each}

