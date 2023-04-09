<script>
    let list;

    const deleteItem = (index) => {


        updateStore();
    }

    const updateStore = () => {
   
    }
</script>

<div>
    {#each list as item, index}
        <div class="row">
            <label>
                <input type="checkbox" bind:checked={item.checked} on:change={updateStore}>
                {item.text}
            </label>
            <button on:click={() => deleteItem(index)}>삭제</button>
        </div>    
    {/each}
</div>

<style>
    .row {
        display: flex;
    }

    label {
        flex-grow: 1;
    }
</style>