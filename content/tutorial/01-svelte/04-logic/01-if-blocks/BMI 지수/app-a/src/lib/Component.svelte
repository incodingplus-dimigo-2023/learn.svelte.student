<script>
    export let height;
    export let weight;

    let BMI = weight / ((height / 100) ** 2);
    let state = (BMI < 25)? (BMI < 23)? (BMI < 18.5)? '저체중': '정상': '과체중': '비만';

</script>

<div class="container">
    <div>신장 : {height}</div>
    <div>체중 : {weight}</div>
    <div>BMI : {BMI}</div>
    {#if state !== '정상'}
        <div class="danger">위험도 : {state}</div>
    {/if}
</div>

<style>
    .container {
        border: 1px solid black;
        padding: 10px;
        margin: 10px;
    }

    .danger {
        color: red
    }
</style>