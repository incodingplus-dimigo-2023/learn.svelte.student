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

	let averageScore = 0;

	$: averageScore = (subjects[0].score + subjects[1].score + subjects[2].score) / 3

	

</script>

{#each subjects as { name, score}, i}
	<div>
		<span>{name}</span> <input type="number" min=0 max={MAX_SCORE} bind:value={score}> <span>점</span> 
	</div>
{/each}

<div>
	<div>평균 {averageScore}점</div>
</div>



