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

	$: averageScore = subjects.reduce((acc, val) => {
		return {name: '', score: acc.score + val.score};
	}).score / subjects.length;
</script>

<div>
	{#each subjects as {name, score}}
		<div>
			<span>{name}</span>
			<input type="number" min="0" max="{MAX_SCORE}" bind:value={score}>
			<span>점</span>
		</div>
	{/each}
	<div>평균 {averageScore}점</div>
</div>



