<script>
	const schools = [["초등학교", 6], ["중학교", 3], ["고등학교", 3]]

	let selectedSchool = 0
	let selectedGrade = 0
</script>

<select bind:value={selectedSchool} on:change={() => selectedGrade = 0}>
	{#each schools as v, i}
		<option value="{i}">{v[0]}</option>
	{/each}
</select>

<select bind:value={selectedGrade}>
	{#each Array(schools[selectedSchool][1]) as v, i}
		<option value="{i}">{i + 1}학년</option>
	{/each}
</select>


<div>{schools[selectedSchool][0]} {selectedGrade + 1}학년</div>

