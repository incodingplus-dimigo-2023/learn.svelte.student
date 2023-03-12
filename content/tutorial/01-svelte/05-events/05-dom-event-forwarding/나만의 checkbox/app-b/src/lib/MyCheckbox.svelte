<script>
    export let label;
    export let value;
    
</script>

<div on:click>
    <input type="checkbox" {value}>
    <span>{label}</span>
</div>