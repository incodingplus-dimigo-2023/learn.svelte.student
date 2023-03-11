<!-- <script>
	const MAX_SCORE = 100
	
	let subjects = [{
		name: "국어",
		score: 0
	}, {
		name: "수학",
		score: 0
	}, {
		name: "영어",
		score: 0
	}]

	let a = 0;
	let b = 0;
	let c = 0;

	let averageScore = (a + b + c) / 3;
</script>

<div>
	국어 <input type = "number" bind:value={a} min="0" max="100"> 점<br>
	수학 <input type = "number" bind:value={b} min="0" max="100"> 점<br>
	영어 <input type = "number" bind:value={c} min="0" max="100"> 점

	<div>평균 {(a + b + c) / 3}점</div>
</div>
<style>
	input {
		width: 80px;
	}
</style>



 -->


 <script>
	const MAX_SCORE = 100
	
	let subjects = [{
		name: "국어",
		score: 0
	}, {
		name: "수학",
		score: 0
	}, {
		name: "영어",
		score: 0
	}]

	$: averageScore = subjects.reduce((a,v) => a + v.score, 0) / subjects.length;
</script>

<div>
  {#each subjects as {name, score}}
    <div>
    {name} : <input type = "number" min={0} max ={100} step={1} bind:value={score}>
    </div>
  {/each}
	<div>평균 {averageScore}점</div>
</div>



