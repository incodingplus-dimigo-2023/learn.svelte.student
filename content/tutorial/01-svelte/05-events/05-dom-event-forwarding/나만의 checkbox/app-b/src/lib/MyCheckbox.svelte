<script>
    export let label;
    export let value;
    
</script>

<div >
    <input type="checkbox" value="{value}">
    <span on:click>{label}</span>
</div>