<script>
    export let name;
    export let korean;
    export let math;
    export let english;
    export let kgrade;
    export let mgrade;
    export let egrade;

    const getGrade = (score) => {
      
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
            <td>{kgrade}</td>
            <td>{mgrade}</td>
            <td>{egrade}</td>
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