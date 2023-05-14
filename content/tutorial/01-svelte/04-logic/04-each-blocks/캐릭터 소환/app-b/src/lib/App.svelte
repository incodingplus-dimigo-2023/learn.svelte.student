<script>
	let characters = []

	const createCharacter = () => {
		let HP = Math.floor(Math.random() * 201);
		let ATK = Math.floor(Math.random() * 201);
		let DEF = Math.floor(Math.random() * 201);
		let STAR = Math.floor((HP + ATK + DEF) / 100);

		return {
			HP,
			ATK,
			DEF,
			STAR
		}
	}

	const spawn = () => {
		return characters = [...characters, createCharacter()];
	}

</script>

<button on:click={spawn}>소환</button>
<div class="container">
	<div class="character">
		{#each characters as {HP, ATK, DEF, STAR}, i}
		<h1>{i + 1}번째 캐릭터</h1>
		<div>체력 : {HP}</div>
		<div>공격력 : {ATK}</div>
		<div>방어력 : {DEF}</div>
		<div>{'★'.repeat(STAR)}</div>
		{/each}
	</div>
</div>

