<script>
	let questionSets = [{
		question: "나는 'Svelte 소개'를 이해했다.",
		answer: 0
	}, {
		question: "나는 '반응성'을 이해했다.",
		answer: 0
	}, {
		question: "나는 '속성'을 이해했다.",
		answer: 0
	}, {
		question: "나는 '논리 블럭'을 이해했다.",
		answer: 0
	}, {
		question: "나는 '이벤트'를 이해했다.",
		answer: 0
	}, {
		question: "나는 '바인딩'을 이해했다.",
		answer: 0
	}]

	const answerText = [
		"전혀 그렇지 않다",
		"그렇지 않다",
		"그렇다",
		"매우 그렇다"	
	]

	let score = 0

</script>

<table>
	{#each questionSets as questionSet, questionIndex}
		<tr>
			
			{#each answerText as text, textIndex}
				<td>

				</td>
			{/each}
		</tr>
	{/each}
</table>

<h1>당신의 Svelte 이해도는 {score}점입니다.</h1>

<style>
	td {
		padding: 5px;
		border: 1px solid black;
	}
</style>