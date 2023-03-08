<script>
    //export let label;
    export let value;

    
</script>

<div>
    <input type="checkbox" checked={value}  on:mousedown={() => value = !value}>
    <span  on:mousedown={() => value = !value}>체크박스 테스트</span>   
</div>