<script>
    export let backgroundColor = 'blue';
    export let color = 'canvastext';
    export let padding = '0';

</script>

<div class="container">
    <div>
        <div>backgroundColor : {backgroundColor}</div>
        <div>color : {color}</div>
        <div>padding : {padding}</div>
    </div>
    <div class="view" style="background-color: {backgroundColor}; color: {color}; padding: {padding}px">텍스트</div>
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
