<script>
	import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher()
</script>

<div on:mousedown={() => dispatch("confirm")}>
    예
</div>

<style>
    div {
        border: 1px solid green;
        padding: 10px 20px;
        border-radius: 5px;
        cursor: pointer;
    }
</style>