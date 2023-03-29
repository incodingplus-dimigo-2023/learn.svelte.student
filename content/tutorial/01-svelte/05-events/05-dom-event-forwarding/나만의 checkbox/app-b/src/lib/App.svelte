<script>
	import MyCheckbox from "./MyCheckbox.svelte";

	let label = "체크박스 테스트";
	let value = false;
	const handleClick = () => {
		value = !value;
		console.log(value);
	};
</script>

<MyCheckbox on:click={handleClick} {value} {label} />
