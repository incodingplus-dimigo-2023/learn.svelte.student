<script>
	const schools = ["초등학교", "중학교", "고등학교"]

	let selectedSchool
	let selectedGrade
</script>

<select bind:value={selectedSchool}>
	{#each schools as i}
		<option>{i}</option>
	{/each}
</select>

<select bind:value={selectedGrade}>
	{#each schools as i, ind}
		<option>{ind+1}학년</option>
	{/each}
</select>


<div>{selectedSchool} {selectedGrade}</div>

