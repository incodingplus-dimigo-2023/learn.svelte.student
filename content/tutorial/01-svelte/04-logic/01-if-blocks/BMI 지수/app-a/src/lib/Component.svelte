<script>
    export let height;
    export let weight;

    let BMI;
    let state;
    let cheak

    $: {
        let bmi = (weight / (height * height)) * 10000;
        if (bmi > 25.0) {
            let fat = "비만";
            state = fat;
            cheak= "red";
        } else if (bmi >= 23.0 && bmi <= 24.9) {
            let nomalfat = "과체중";
            state = nomalfat;
            cheak= "red";
        } else if (bmi >= 18.5 && bmi <= 22.5) {
            let nomal = "";
            state = nomal;
            cheak= "black";
        } else if (bmi <= 22.5) {
            let less = "저체중";
            state = less;
            cheak= "red";
        }
        BMI = bmi;
    }
</script>

<div class="container">
    <div>신장 : {height}</div>
    <div>체중 : {weight}</div>
    <div>BMI : {BMI}</div>
    <div style="color: {cheak};">{state}</div>
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
