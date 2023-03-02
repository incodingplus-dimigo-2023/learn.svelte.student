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
		let char = createCharacter();
		characters = [...characters,char]
	}

	const kill = (index) => {
		characters = characters.slice(1);
	}

</script>

<button on:click={spawn}>소환</button>
<div class="container">
	<Character/>
</div>


<style>
	.container > div {
		display: flex;
	}
</style>
	