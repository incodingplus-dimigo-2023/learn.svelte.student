<script>
	const schools = ["초등학교", "중학교", "고등학교"];
	const el = ["1", "2", "3", "4", "5", "6"];
	const mi = ["1", "2", "3"];
	const hi = ["1", "2", "3"];

	let selectedSchool;
	let selectedGrade;
	const check = console.log(selectedSchool);
</script>

<select bind:value={selectedSchool}>
	{#each schools as item}
		<option value={item}>{item}</option>
	{/each}
</select>

<select bind:value={selectedGrade}>
	{#if selectedSchool == "초등학교"}
		{#each el as item}
			<option value={item}>{item}</option>
		{/each}
	{/if}
	{#if selectedSchool == "중학교"}
		{#each mi as item}
			<option value={item}>{item}</option>
		{/each}
	{/if}
	{#if selectedSchool == "고등학교"}
		{#each hi as item}
			<option value={item}>{item}</option>
		{/each}
	{/if}
</select>

<div>{selectedSchool} {selectedGrade}학년</div>
