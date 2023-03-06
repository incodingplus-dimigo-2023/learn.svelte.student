<script>
    export let bcolor;
    export let color;
    export let padding;
</script>

<div class="container">
    <div>
        <div>background-color: {bcolor};</div>
        <div>
            color: {color};
        </div>
        <div>padding: {padding};</div>
    </div>
    <div class="view"  style="background-color: {bcolor}; color: {color}; padding: {padding};">텍스트</div>
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
