<script>
    let text = ""

    const addItem = () => {
        
        text = "";
    }
</script>

<div>
    <input type="text" bind:value={text}>
    <button on:click={addItem}>추가</button>
</div>

<style>
    div {
        display: flex;
    }

    input {
        flex-grow: 1;
    }
</style>