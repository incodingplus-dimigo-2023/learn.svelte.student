<script>
	const schools = ["초등학교", "중학교", "고등학교"]

	let selectedSchool
	let selectedGrade
	let selected
	let select
	const school = () =>{
		selectedSchool=selected
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
	<option>1</option>
	<option>2</option>
	<option>3</option>
</select>


<div>{selectedSchool} {selectedGrade}학년</div>
