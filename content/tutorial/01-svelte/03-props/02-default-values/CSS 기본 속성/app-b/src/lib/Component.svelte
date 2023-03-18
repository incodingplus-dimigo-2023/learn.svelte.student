<script>
    const arr = [{
        backgroundcolor: 'transparent',
        color: 'canvastext',
        padding: '0'
    }, {
        backgroundcolor: 'blue',
        color: 'canvastext',
        padding: '0'
    }, {
        backgroundcolor: 'blue',
        color: 'red',
        padding: '0'
    }]
</script>

<div class="container">
    {#each arr as {backgroundcolor, color, padding}}
    <div>
        <div>{backgroundcolor}</div>
        <div>{color}</div>
        <div>{padding}</div>
    </div>
    <div class="view" style="backgroundcolor: {backgroundcolor};
    color: {color};
    padding:{padding};">텍스트</div>
    {/each}
</div>

<style>
    .container{
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
