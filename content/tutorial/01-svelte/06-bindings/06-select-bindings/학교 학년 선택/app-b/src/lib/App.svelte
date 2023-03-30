<script>
	const schools = ["초등학교", "중학교", "고등학교"]

	let selectedSchool
	let selectedGrade = '1'
	$ : {
		console.log(selectedSchool, selectedGrade)
	}
	if(selectedSchool) {
		selectedGrade = '1'
	}
</script>

<select bind:value={selectedSchool}>
	<option>{schools[0]}</option>
	<option>{schools[1]}</option>
	<option>{schools[2]}</option>
</select>

<select bind:value={selectedGrade}>
	{#if selectedSchool === '초등학교'}
		<option>1</option>
		<option>2</option>
		<option>3</option>
		<option>4</option>
		<option>5</option>
		<option>6</option>
	{:else }
		<option>1</option>
		<option>2</option>
		<option>3</option>
	{/if}
	
</select>


<div>{selectedSchool} {selectedGrade}학년</div>

