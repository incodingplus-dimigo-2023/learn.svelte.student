<script>
    export let a1 = 'transparent;'
    export let a2 = 'canvastext;'
    export let a3 = '0;'

</script>

<div class="container">
    <div>
        <div>background-color: {a1}</div>
        <div>color: {a2}</div>
        <div>padding: {a3}</div>
    </div>
    <div class="view" style="background-color: {a1}; color: {a2}; >padding: {a3};">텍스트</div>
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
