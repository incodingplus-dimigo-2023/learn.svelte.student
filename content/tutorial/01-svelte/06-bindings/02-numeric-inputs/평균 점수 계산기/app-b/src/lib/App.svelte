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

	let averageScore;
	$: {averageScore = (subjects[0]['score']+subjects[1]['score']+subjects[2]['score'])/3}
</script>

<div>
	<div>
		<span>{subjects[0]['name']}</span>
		<input type="number" min="0" max="{MAX_SCORE}" bind:value={subjects[0]['score']}>
	</div>
	<div>
		<span>{subjects[1]['name']}</span>
		<input type="number" min="0" max="{MAX_SCORE}" bind:value={subjects[1]['score']}>
	</div>
	<div>
		<span>{subjects[2]['name']}</span>
		<input type="number" min="0" max="{MAX_SCORE}" bind:value={subjects[2]['score']}>
	</div>
	
	<div>평균 {averageScore}점</div>
</div>



