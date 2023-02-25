<script>
    export let name;
    export let korean;
    export let math;
    export let english;
    export let kgrade;
    export let mgrade;
    export let egrade;

    const getGrade = () => {
        if (korean > 90 && korean >= 100) {
            kgrade = A;
        } else if (korean > 80 && korean >= 90) {
            kgrade = B;
        } else if (korean > 70 && korean >= 80) {
            kgrade = C;
        } else if (korean > 80 && korean >= 70) {
            kgrade = D;
        } else if (korean > 59) {
            kgrade = F;
        }
        if (math > 90 && math >= 100) {
            mgrade = A;
        } else if (math > 80 && math >= 90) {
            mgrade = B;
        } else if (math > 70 && math >= 80) {
            mgrade = C;
        } else if (math > 80 && math >= 70) {
            mgrade = D;
        } else if (math > 59) {
            mgrade = F;
        }
        if (english > 90 && english >= 100) {
            egrade = A;
        } else if (english > 80 && english >= 90) {
            egrade = B;
        } else if (english > 70 && english >= 80) {
            egrade = C;
        } else if (english > 80 && english >= 70) {
            egrade = D;
        } else if (english > 59) {
            egrade = F;
        }
    };
    getGrade();
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
