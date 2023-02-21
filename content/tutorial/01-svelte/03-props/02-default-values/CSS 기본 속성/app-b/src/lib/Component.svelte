<script>
    export let bcolor;
    export let color;
    export let padding;
    const arr = [
        {
            bcolor: "transparent",
            color: "canvastex",
            padding: "0",
        },
        {
            bcolor: "canvastex",
            color: "#3FB984",
            padding: "0",
        },
        {
            bcolor: "blue",
            color: "red",
            padding: "0",
        },
        {
            bcolor: "blue",
            color: "red",
            padding: "100px",
        },
    ];
</script>

<div class="container">
    <div>
        <div>background-color: {arr[1]};</div>
        <div>
            color: {arr[1]};
        </div>
        <div>padding: {arr[1]};</div>
    </div>
    <div class="view">텍스트</div>
</div>

<style>
    .container {
        display: flex;
        padding: 30px;
    }
    .view {
        width: 100px;
        height: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 30px;
    }
</style>
