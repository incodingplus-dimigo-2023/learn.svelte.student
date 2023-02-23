<script>
	let characters = [];
	let count = 0;
	let CNT;
	let HP;
	let ATK;
	let DEF;
	let STARMARK;
	let starnum;
	var stars = ["", "★", "★★", "★★★", "★★★★", "★★★★★", "★★★★★★"];
	let container;
	const createCharacter = () => {
		CNT = count + 1;
		HP = Math.floor(Math.random() * 201);
		ATK = Math.floor(Math.random() * 201);
		DEF = Math.floor(Math.random() * 201);
		starnum = Math.floor((HP + ATK + DEF) / 100);
		STARMARK = stars[starnum];

		characters[count] = {
			CNT,
			HP,
			ATK,
			DEF,
			STARMARK,
		};
		count++;
	};

	// const spawn = () => {

	// };
</script>

<button on:click={createCharacter}>소환</button>
<div class="container">
	{#each characters as { STARMARK, HP, ATK, DEF }, i}
		<div class="character">
			<h1>{i + 1}번째 캐릭터</h1>
			<div>체력 : {HP}</div>
			<div>공격력 : {ATK}</div>
			<div>방어력 : {DEF}</div>
			<div>등급 : {STARMARK}</div>
		</div>
	{/each}
</div>
