<script>
	import MyCheckbox from "./MyCheckbox.svelte";

	let label = "주크박스 테스트"
	let value = false
	const sayho = () => {
        value = !(value);
		console.log(value)
    }
</script>

<MyCheckbox label={label} value={value} on:click={sayho} />