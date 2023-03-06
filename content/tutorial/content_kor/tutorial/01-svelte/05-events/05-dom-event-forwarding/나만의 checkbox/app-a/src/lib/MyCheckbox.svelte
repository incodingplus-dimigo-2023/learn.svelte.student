<script>
    export let label;
    export let value;
</script>

<div>
    <input type="checkbox" checked={value} on:click>
    <span on:click>{label}</span>
</div>