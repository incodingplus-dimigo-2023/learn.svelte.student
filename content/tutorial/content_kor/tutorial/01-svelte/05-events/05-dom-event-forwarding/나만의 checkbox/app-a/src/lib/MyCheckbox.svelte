<script>
    export let label;
    export let value;

</script>

<div>
    <input on:click type="checkbox" checked="{value}">
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <span on:click >{label}</span>
</div>