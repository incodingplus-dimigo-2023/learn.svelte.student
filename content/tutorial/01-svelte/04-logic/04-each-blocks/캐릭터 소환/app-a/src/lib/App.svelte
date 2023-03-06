
<script>
	let characters = []

	const createCharacter = () => {
		let HP;
		let ATK;
		let DEF;
		let STAR = '';
		HP = Math.round(Math.random() * 200)
		ATK = Math.round(Math.random() * 200)
		DEF = Math.round(Math.random() * 200)
		for(let i = (((HP + ATK + DEF) - ((HP + ATK + DEF) % 100)) / 100); i > 0; i--){
			STAR = `${STAR}★`
		}

		return {
			HP,
			ATK,
			DEF,
			STAR
		}
	}

	const spawn = () => {
		let imsy = createCharacter();
		characters = [...characters, imsy]
	}
</script>
<button on:click={spawn}>소환</button>
<div class="container">
	{#each characters as {HP, ATK, DEF, STAR}, i}
	<div class="character">
		<h1>{i + 1}번째 캐릭터</h1>
		<div>체력: {HP}</div>
		<div>공격력: {ATK}</div>
		<div>방어력: {DEF}</div>
		<div>{STAR}</div>
	</div>
	{/each}
</div>
