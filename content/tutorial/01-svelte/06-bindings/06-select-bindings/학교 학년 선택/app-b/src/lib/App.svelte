<script>
	const schools = ["초등학교", "중학교", "고등학교"]
	const grade6 = ['1','2','3','4','5','6']
	const grade3 = ['1','2','3']
	let selectedSchool ="초등학교";
	let selectedGrade = '1';
	let selected
	let select
	const school = () =>{
		selectedSchool=selected
		selectedGrade = '1';
}
	const grade = () =>{
		selectedGrade=select
}
</script>

<select bind:value={selected} on:click={school}>
	<option>초등학교</option>
	<option>중학교</option>
	<option>고등학교</option>
</select>


<select bind:value={select} on:click={grade}>
	{#if selectedSchool === '초등학교'}
		{#each grade6 as number}
			<option>{number}</option>
		{/each}
	{:else}
	{#each grade3 as number}
	<option>{number}</option>
{/each}
	{/if}
</select>


<div>{selectedSchool} {selectedGrade}학년</div>