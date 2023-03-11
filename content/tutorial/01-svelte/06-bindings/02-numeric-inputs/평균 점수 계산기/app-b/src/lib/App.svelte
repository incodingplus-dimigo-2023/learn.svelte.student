<script>
	import { each } from "svelte/internal";

	const MAX_SCORE = 100;

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
	$: averageScore =
		subjects.reduce((a, v) => a + v.score, 0) / subjects.length;
</script>

<div>
	{#each subjects as { name, score }}
		<div>
			{name} :
			<input
				type="number"
				min={0}
				max={MAX_SCORE}
				step={1}
				bind:value={score}
			/>
		</div>
	{/each}
	<div>평균 {averageScore}점</div>
</div>
