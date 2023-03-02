<script>
    export let character
    export let index
    
    let STAR = Math.floor((character.HP + character.ATK + character.DEF) / 100)
</script>

<div class="character">
    <h1>{index}번째 캐릭터</h1>
    <div>체력 : { character.HP }</div>
    <div>공격력 : { character.ATK }</div>
    <div>방어력 : { character.DEF }</div>
    <div>등급 : {"★".repeat(character.STAR + 1)}</div>
</div>


