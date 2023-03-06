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
		
	}

	const kill = (index) => {
		
	}

</script>

<button on:click={spawn}>소환</button>
<div class="container">
	
</div>


<style>
	.container > div {
		display: flex;
	}
</style>
	