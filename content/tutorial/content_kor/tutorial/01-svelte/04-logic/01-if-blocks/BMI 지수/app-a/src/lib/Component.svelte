<script>
    export let height;
    export let weight;


    let BMI;
    let state;

    $: {
       BMI = weight / ((height/100) * (height/100))
    }

    
</script>

<div class="container">
    <div>신장 : {height}</div>
    <div>체중 : {weight}</div>
    <div>BMI : {BMI}</div>
    {#if BMI > 25}
        <div class="danger">위험도: 비만</div>
    {/if}
    {#if BMI < 25 && BMI >= 23}
    <div class="danger">위험도: 과체중</div>
    {/if}
    {#if BMI <= 18.5}
    <div class="danger">위험도: 과체중</div>
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