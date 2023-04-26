<script>
    export let height;
    export let weight;

    let BMI = Number({weight}) / Number(height) ** 2;
    let state;

    $: if(BMI <= 18.5){
       state = '위험도 저체중'
    } else if(BMI >= 25){
        state = '위험도 : 비만'
    }

    
</script>

<div class="container">
    <div>신장 : '{height}'</div>
    <div>체중 : '{weight}'</div>
    <div>BMI : '{BMI}'</div>
    <div class="danger">'{state}'</div>
</div>

<style>
    .container {
        border: 1px solid black;
        padding: 10px;
        margin: 10px;
        color: white;
    }

    .danger {
        color: red
    }
</style>