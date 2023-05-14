<script>
  let characters = [];

  const createCharacter = () => {
    let HP = Math.floor(Math.random() * 201); // 0부터 200까지의 랜덤한 값 생성
    let ATK = Math.floor(Math.random() * 201);
    let DEF = Math.floor(Math.random() * 201);
    let STAR = Math.floor((HP + ATK + DEF) / 100); // 등급 계산

    return {
      HP,
      ATK,
      DEF,
      STAR,
    };
  };

  const spawn = () => {
    const newCharacter = createCharacter();
    characters = [...characters, newCharacter];
  };
</script>

<button on:click={spawn}>소환</button>
  {#each characters as character, i}
    <div class="character">
      <h1>{i + 1}번째 캐릭터</h1>
      <div>체력: {character.HP}</div>
      <div>공격력: {character.ATK}</div>
      <div>방어력: {character.DEF}</div>
      <div>등급: {'★'.repeat(character.STAR)}</div>
    </div>
  {/each}


<style>

  .character {
    border: 1px solid gray;
    margin-bottom: 10px;
    padding: 10px;
  }
</style>
