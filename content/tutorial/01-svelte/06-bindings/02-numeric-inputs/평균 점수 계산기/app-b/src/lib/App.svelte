<script>
  const MAX_SCORE = 100;

  let subjects = [
    {
      name: "국어",
      score: 0,
    },
    {
      name: "수학",
      score: 0,
    },
    {
      name: "영어",
      score: 0,
    },
  ];

  let averageScore = 0;
  const calculate = () => {
    averageScore =
      subjects.reduce((acc, cur) => {
        return (acc += cur.score);
      }, 0) / 3;
  };
</script>

<div>
  <div>
    국어 <input
      type="number"
      min="0"
      max="100"
      bind:value={subjects[0].score}
      on:input={calculate}
    /> 점
  </div>
  <div>
    수학 <input
      type="number"
      min="0"
      max="100"
      bind:value={subjects[1].score}
      on:input={calculate}
    /> 점
  </div>
  <div>
    영어 <input
      type="number"
      min="0"
      max="100"
      bind:value={subjects[2].score}
      on:input={calculate}
    /> 점
  </div>
  <div>평균 {averageScore}점</div>
</div>
