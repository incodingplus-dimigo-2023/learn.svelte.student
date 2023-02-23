<script>
    export let backcolor = 'blue';
    export let clor = 'red';
    export let pad = 0;
</script>

<div class="container">
    <div>
        <div>background-color: {backcolor};</div>
        <div>color: {clor};</div>
        <div>padding: {pad};</div>
    </div>
    <div class="view" style="background-color: {backcolor}; color: {clor}; padding: {pad};">텍스트</div>
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
