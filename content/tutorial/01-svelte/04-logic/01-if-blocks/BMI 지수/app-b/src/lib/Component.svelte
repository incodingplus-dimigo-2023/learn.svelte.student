<script>
    export let height;
    export let weight;

    let BMI;
    let state;

    $: {
       
    }

    
</script>

<div class="container">
    <div>신장 : {height}</div>
    <div>체중 : {weight}</div>
    <div>BMI : </div>

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