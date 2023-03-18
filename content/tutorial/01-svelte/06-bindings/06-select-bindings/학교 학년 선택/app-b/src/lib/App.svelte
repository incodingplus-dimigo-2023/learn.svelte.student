<script>
  const schools = [
    ["초등학교", 6],
    ["중학교", 3],
    ["고등학교", 3],
  ];
  const grade = [1, 2, 3, 4, 5, 6];

  let selectedSchool = schools[0];
  let selectedGrade = 6;
</script>

<select bind:value={selectedSchool}>
  {#each schools as arr, i}
    <option value={arr}>{arr[0]}</option>
  {/each}
</select>

<select bind:value={selectedGrade}>
  {#each grade as arr, i}
    {#if i < selectedSchool[1]}
      <option>{arr}</option>
    {/if}
  {/each}
</select>

<div>{selectedSchool[0]} {selectedGrade}학년</div>
