<script>
	import Character from "./Character.svelte";
	
	let characters = []

	const createCharacter = () => {
		const HP = Math.floor(Math.random() * 201)
		const ATK = Math.floor(Math.random() * 201)
		const DEF = Math.floor(Math.random() * 201)

		return {
			HP,
			ATK,
			DEF,
		}
	}

	const spawn = () => {
		let stat = createCharacter();
		characters = [...characters, stat];
	}

	const kill = (index) => {
		characters = characters.slice(1);
	}

</script>

<button on:click={spawn}>소환</button>
<div class="container">
	{#each characters as {},i}
		<div>
			<Character index={i+1} character={characters[i]}/>
			<button on:click={kill}>캐릭터 삭제</button>
		</div>
	{/each}
</div>


<style>
	.container > div {
		display: flex;
	}
</style>
	