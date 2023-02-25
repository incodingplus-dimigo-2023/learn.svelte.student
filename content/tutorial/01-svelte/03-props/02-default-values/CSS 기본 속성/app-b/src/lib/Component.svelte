<script>
    export let color = 'transparent';
    export let textColor = 'canvastext';
    export let padding = '0';
</script>

<div class="container">
    <div>
        <div>background-color: {color};</div>
        <div>color: {textColor};</div>
        <div>padding: {padding}px;</div>
    </div>
    <div class="view" style="background-color: {color}; color: {textColor}; padding: {padding}px;">텍스트</div>
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
