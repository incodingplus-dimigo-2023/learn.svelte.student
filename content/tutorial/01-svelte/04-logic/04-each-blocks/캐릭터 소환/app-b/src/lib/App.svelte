<script>
	let characters = [];
	let count = 1;
	let createCharacter = () => {
		let HP = Math.floor(Math.random() * 200);
		let ATK = Math.floor(Math.random() * 200);
		let DEF = Math.floor(Math.random() * 200);
		let STAR = Math.floor((HP + ATK + DEF) / 100);

		return {
			HP,
			ATK,
			DEF,
			STAR,
			count: count++,
		};
	};

	const spawn = () => {
		characters = [...characters, createCharacter()];
	};
</script>

<button on:click={spawn}>소환</button>
<div class="container">
	{#each characters as character}
		<div class="character">
			<h1>{character.count}번째 캐릭터</h1>
			<div>체력: {character.HP}</div>
			<div>공격력: {character.ATK}</div>
			<div>방어력: {character.DEF}</div>
			<div>등급: {"★".repeat(character.STAR)}</div>
		</div>
	{/each}
</div>
