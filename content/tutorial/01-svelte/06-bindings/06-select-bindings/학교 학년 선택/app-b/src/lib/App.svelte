<script>
	const schools = ["초등학교", "중학교", "고등학교"]
	const grades = [];
	const grades2 = [];
	
	for(let i = 0; i < 6; i++) {
		grades.push(i+1);
	}
	for(let i = 0; i < 3; i++) {
		grades2.push(i+1);
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
	{#if selectedSchool === "초등학교"}
		{#each grades as grade}
			<option value={grade}>
				{grade}학년
			</option>
		{/each}
		{:else}
			{#each grades2 as grade}
				<option value={grade}>
					{grade}학년
				</option>
			{/each}
	{/if}
</select>



<div>{selectedSchool} {selectedGrade}학년</div>

