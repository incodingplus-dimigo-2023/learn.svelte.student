<script>
  const schools = ["초등학교", "중학교", "고등학교"];
  const grade = [1, 2, 3, 4, 5, 6];

  let selectedSchool;
  let selectedGrade;
</script>

<select bind:value={selectedSchool}>
  {#each schools as arr, i}
    <option>{arr}</option>
  {/each}
</select>

<select bind:value={selectedGrade}>
  {#each grade as arr, i}
    {#if i < 4}
      <option>{arr}</option>
    {/if}
  {/each}
</select>

<div>{selectedSchool} {selectedGrade}학년</div>
