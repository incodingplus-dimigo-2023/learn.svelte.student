<script>
    const deleteItem = (index) => {
        
    }
</script>

<div>
    {#each  as item, index}
        <div class="row">
            <label>
                <input type="checkbox" bind:checked={item.checked}>
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