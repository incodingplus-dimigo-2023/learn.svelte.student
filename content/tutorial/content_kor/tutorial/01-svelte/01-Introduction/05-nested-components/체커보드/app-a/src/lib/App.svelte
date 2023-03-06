<script>
    import Black from "./Black.svelte";
    import White from "./White.svelte";
</script>

<div class="flex-container">
    <div>
        <Black />
        <White />
        <Black />
        <White />
    </div>
</div>
<br>
<div class="flex-container">
    <div>
        <White />
        <Black />
        <White />
        <Black />
    </div>
</div>
<br>
<div class="flex-container">
    <div>
        <Black />
        <White />
        <Black />
        <White />
    </div>
</div>
<br>
<div class="flex-container">
    <div>
        <White />
        <Black />
        <White />
        <Black />
    </div>
</div>

<style>
    .flex-container {
        display: inline-flex;
    }
    .flex-container > div {
        display: flex;
        border: 1px solid black;
    }
</style>