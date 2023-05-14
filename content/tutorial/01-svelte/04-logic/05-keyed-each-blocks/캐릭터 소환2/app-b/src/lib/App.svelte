<script>
	import Character from "./Character.svelte";

	let characters = [];

	const createCharacter = () => {
		const HP = Math.floor(Math.random() * 201);
		const ATK = Math.floor(Math.random() * 201);
		const DEF = Math.floor(Math.random() * 201);

		return {
			HP,
			ATK,
			DEF,
		};
	};

	const spawn = () => {
		const newCharacter = createCharacter();
		characters = [...characters, newCharacter];
	};

	const deleteCharacter = (index) => {
		characters = characters.filter((_, i) => i !== index);
	};
</script>

<button on:click={spawn}>소환</button>
<div class="container">
	{#each characters as character, index (index)}
		<div class="character">
			<Character {character} {index} />
			<button on:click={() => deleteCharacter(index)}>삭제</button>
		</div>
	{/each}
</div>

<style>
	.container > div {
		display: flex;
	}
</style>
