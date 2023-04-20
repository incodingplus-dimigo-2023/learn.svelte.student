<script>
    export let backgroundcolor = 'background-color: transparent;';
    export let color = 'color: canvastext;';
    export let padding = 'padding: 0;';
</script>

<div class="container">
    <div>
        <div>{backgroundcolor}</div>
        <div>{color}</div>
        <div>{padding}</div>
    </div>
    <div class="view" style="{backgroundcolor} {color} {padding}">텍스트</div>
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
