<script>
    export let height;
    export let weight;

    let BMI = weight / ((height / 100) * (height / 100));
    let state = {bmi : false};
    let danger = '';
    $: {
       if(BMI >= 25) {
            state.bmi = true;
            danger = '비만';
       } else if(BMI <= 18.5) {
            state.bmi =true;
            danger = '저체중'
       }
    }

    
</script>

<div class="container">
    <div>신장 : {height}</div>
    <div>체중 : {weight}</div>
    <div>BMI : {BMI}</div>
    {#if state.bmi}
        <div class="danger">위험도 : {danger}</div>
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