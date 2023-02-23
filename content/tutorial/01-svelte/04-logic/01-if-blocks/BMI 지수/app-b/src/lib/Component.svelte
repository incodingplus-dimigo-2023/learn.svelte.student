<script>
    export let height;
    export let weight;

    let BMI;
    let state;

    $: {
       BMI = weight / ((height / 100)*(height / 100))
       if(BMI >= 25.0||BMI <= 18.5){
        state = 'red'
       }else{
        state = 'black'
       }
    }

    
</script>

<div class="container">
    <div style="color : {state};">신장 : {height}</div>
    <div style="color : {state};">체중 : {weight}</div>
    <div style="color : {state};">BMI :{BMI} </div>

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