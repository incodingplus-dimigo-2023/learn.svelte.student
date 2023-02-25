<script>
	/**
	 * @type {{
			HP: number,
			ATK: number,
			DEF: number,
			STAR: number
		}[]}
	 */
	let characters = [];
	
	const createCharacter = () => {
		let stat = () => Math.floor(Math.random()*201);
		let HP = stat();
		let ATK = stat();
		let DEF = stat();
		let STAR= Math.floor((HP + ATK + DEF) / 100);

		return {
			HP,
			ATK,
			DEF,
			STAR
		}
	}

	const spawn = () => {
		let char = createCharacter();
		characters = [...characters, char];
	}
</script>

<button on:click={spawn}>소환</button>
<div class="container">
	{#each  characters as char, ind}
		<div class="character">
		<h1>{ind+1}번쨰 캐릭터</h1>
		<div>체력 : {char.HP}</div>
		<div>공격력 : {char.ATK}</div>
		<div>방어력 : {char.DEF}</div>
		<div>등급 ; {'★'.repeat(char.STAR + 1)}</div>
	</div>
	{/each}
	
</div>

