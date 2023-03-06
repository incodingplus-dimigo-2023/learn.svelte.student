<script>
 


    export let name;
    export let korean;
    export let math;
    export let english;

    const getGrade = (score) => {
        score = Number(score);
        let re;
      if(score >= 90 && score <= 100) {
        re = 'A';
        return re;
      } else if(score >= 80 && score <= 90) {
        re = 'B';
        return re;
      } else if(score >= 70 && score <= 80) {
        re = 'C';
        return re;
      } else if(score >= 60 && score <= 70) {
        re = 'D';
        return re;
      } else if(score < 60){
        re = 'E';
        return re;
      }
      console.log(score);
    }
</script>

<div>
    <h1>{name}님의 성적표</h1>
    <table>
        <tr>
            <td>과목</td>
            <td>국어</td>
            <td>수학</td>
            <td>영어</td>
        </tr>
        <tr>
            <td>점수</td>
            <td>{korean}</td>
            <td>{math}</td>
            <td>{english}</td>
        </tr>
        <tr>
            <td>등급</td>
            <td>{getGrade(korean)}</td>
            <td>{getGrade(math)}</td>
            <td>{getGrade(english)}</td>
        </tr>
    </table>
</div>

<style>
    table {
        border-collapse: collapse;
        text-align: center;
    }
    td {
        border: 1px solid black;
    }

</style>