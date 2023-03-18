<script>
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();

    const clickyes = () => {
        dispatch("yes");
    };
</script>

<div on:click={clickyes}>예</div>

<style>
    div {
        border: 1px solid green;
        padding: 10px 20px;
        border-radius: 5px;
        cursor: pointer;
    }
</style>
