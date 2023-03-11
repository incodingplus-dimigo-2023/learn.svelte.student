<script>
	const MAX_SCORE = 100;
	num = 0;

	let subjects = [
		{
			name: "국어 ",
			score: 0,
		},
		{
			name: "수학 ",
			score: 0,
		},
		{
			name: "영어 ",
			score: 0,
		},
	];

	let averageScore = 0;
	for (let i = 0; i < subjects.length; i++) {
		const arr = subjects[i];
		num += arr;
	}
	averageScore = num / 3;
</script>

<div>
	<span>{subjects[0].name}</span><input
		type="number"
		bind:value={subjects[0].score}
		min="0"
		max="100"
	/><span>점</span>
</div>
<div>
	<span>{subjects[1].name}</span><input
		type="number"
		bind:value={subjects[1].score}
		min="0"
		max="100"
	/><span>점</span>
</div>
<div>
	<span>{subjects[2].name}</span><input
		type="number"
		bind:value={subjects[2].score}
		min="0"
		max="100"
	/><span>점</span>
</div>
<div>
	<div>평균 {averageScore}점</div>
</div>
