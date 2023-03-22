<script>
	const schools = ["초등학교", "중학교", "고등학교"]
	const Elementary = [1, 2, 3, 4, 5, 6]
	const up = [1, 2, 3]
	let selectedSchool
	let selectedGrade
</script>

<select bind:value={selectedSchool}>
	{#each schools as i}
		<option>{i}</option>
	{/each}
</select>

<select bind:value={selectedGrade}>
	{#if selectedSchool === schools[0]}
		{#each Elementary as i}
			<option>{i}학년</option>
		{/each}
	{:else}
		{#each up as i}
			<option>{i}학년</option>
		{/each}
	{/if}
	
	
</select>


<div>{selectedSchool} {selectedGrade}</div>

