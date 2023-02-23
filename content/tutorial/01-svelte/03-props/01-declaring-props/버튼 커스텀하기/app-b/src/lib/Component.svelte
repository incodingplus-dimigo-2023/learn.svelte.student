<script>
    export let name;
    export let color;
</script>

<button style = "border-color : {color}">
    <img src="{name}.png" >
    <div style ="color : {color}">{name}</div>
</button>

<style>
    button {
        display: flex;
        align-items: center;
        justify-content: space-around;
        padding: 30px;
        margin: 10px;
        width: fit-content;
        border-radius: 9999px;
        background-color: white;
    }
    button:hover {
        cursor: pointer;
    }
    img {
        width: 100px;
        height: 100px;
    }
    div {
        font-size: 80px;
        margin-left: 30px;
        font-weight: bold;
    }
</style>