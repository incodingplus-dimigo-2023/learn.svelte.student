<!-- <script>
	const schools = ["초등학교", "중학교", "고등학교"];

	let selectedSchool = "초등학교";
	let selectedGrade = 1;
</script> -->
<script>
	const schools = ["초등학교", "중학교", "고등학교"];
	const el = ["1", "2", "3", "4", "5", "6"];
	const mi = ["1", "2", "3"];
	const hi = ["1", "2", "3"];

	let selectedSchool="초등학교";
	let selectedGrade="1";
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
			<option value={item}>{item}학년</option>
		{/each}
	{/if}
	{#if selectedSchool == "중학교"}
		{#each mi as item}
			<option value={item}>{item}학년</option>
		{/each}
	{/if}
	{#if selectedSchool == "고등학교"}
		{#each hi as item}
			<option value={item}>{item}학년</option>
		{/each}
	{/if}
</select>
<div>{selectedSchool} {selectedGrade}학년</div>

<!-- {#if selectedSchool == schools[1]}
	<select bind:value={selectedGrade}>
		{#each Array(3) as _, item}
			<option value={item + 4}>{selectedGrade}학년</option>
		{/each}
	</select>
{/if}
{#if selectedSchool == schools[1]}
	<select bind:value={selectedSchool}>
		{#each Array(3) as _, item}
			<option value={item + 1}>{item + 1}학년</option>
		{/each}
	</select>
{/if}
{#if selectedSchool == schools[1]}
	<select bind:value={selectedSchool}>
		{#each Array(3) as _, item}
			<option value={item + 1}>{item + 1}학년</option>
		{/each}
	</select>
{/if}

<div>{selectedSchool} {selectedGrade}학년</div> -->
