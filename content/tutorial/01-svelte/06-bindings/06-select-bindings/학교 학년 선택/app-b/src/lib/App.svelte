<script>
	const schools = ["초등학교", "중학교", "고등학교"]
	const grades = [];
	
	for(let i = 0; i < 6; i++) {
		grades.push(i+1);
	}

	let selectedSchool
	let selectedGrade
</script>

<select bind:value={selectedSchool}>
	{#each schools as school}
		<option value={school}>
			{school}
		</option>
	{/each}
</select>
<select bind:value={selectedGrade}>
	{#each grades as grade}
		<option value={grade}>
			{grade}학년
		</option>
	{/each}
</select>



<div>{selectedSchool} {selectedGrade}학년</div>

