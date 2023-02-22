<script>
    export let height;
    export let weight;

    let BMI;
    let state;

    $: {
        let bmi = weight / (height * height) *10000;
        BMI = bmi;
        if (bmi > 25.0) {
            let fat = "비만";
        } else if (bmi >= 23.0 && bmi <= 24.9) {
            let nomalfat = "과체중";
        } else if (bmi >= 18.5 && bmi <= 22.5) {
            let nomal = "정상";
        } else if (bmi <= 22.5) {
            let less = "저체중";
        }
    }
</script>

<div class="container">
    <div>신장 : {height}</div>
    <div>체중 : {weight}</div>
    <div>BMI : {BMI}</div>
</div>

<style>
    .container {
        border: 1px solid black;
        padding: 10px;
        margin: 10px;
    }

    .danger {
        color: red;
    }
</style>
