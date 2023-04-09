<script>

</script>

<div>
    {#each  as item, index}
        <div class="row">
            <label>
                <input type="checkbox" checked={item.checked}>
                {item.text}
            </label>
            <button on:click={}>삭제</button>
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