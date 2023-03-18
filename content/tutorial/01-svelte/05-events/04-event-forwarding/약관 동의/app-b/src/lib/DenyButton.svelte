<script>
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();

    const clickno = () => {
        dispatch("yes");
    };
</script>

<div on:click={clickno}>아니오</div>

<style>
    div {
        border: 1px solid red;
        padding: 10px 20px;
        border-radius: 5px;
        cursor: pointer;
    }
</style>
