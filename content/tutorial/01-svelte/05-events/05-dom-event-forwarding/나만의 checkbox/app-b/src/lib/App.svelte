<script>
	import MyCheckbox from "./MyCheckbox.svelte";

	let label = "체크박스 테스트"
	let value = false
	const click = () => {
		if(value === true)value = false
		else value = true
	}
</script>

<MyCheckbox {label} {value} on:click={click}/>