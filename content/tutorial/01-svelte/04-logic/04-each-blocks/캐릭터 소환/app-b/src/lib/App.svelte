<script>
	let characters = [];

	const createCharacter = () => {
		let HP;
		let ATK;
		let DEF;
		let STAR;

		HP = spawn();
		ATK = spawn();
		DEF = spawn();
		STAR = Math.floor((HP+ATK+DEF)/100);

		return {
			HP,
			ATK,
			DEF,
			STAR
		}
	}

	const spawn = () => {
		return  Math.floor(Math.random()*200);
	}
</script>

<button on:click = {() => characters = [...characters,createCharacter()]}>소환</button>
<div class="container">
	{#each characters as {HP, ATK, DEF, STAR},i}
		<div class="character">
		<h1>{i+1}번째 캐릭터</h1>
		<div>체력 : {HP}</div>
        <div>공격력 : {ATK}</div>
        <div>방어력 : {DEF}</div>
        <div>등급 : {'★'.repeat(Number(STAR))}</div>
		</div>
	{/each}
</div>