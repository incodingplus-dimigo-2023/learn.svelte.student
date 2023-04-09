<script>
	let numbers = [1, 2, 3, 4];

	const addNumber = () => {
		numbers = [numbers.length + 1,...numbers];
	}

	$: sum = numbers.reduce((t, n) => t + n, 0);

	const minNumber = () => {
		numbers = numbers.slice(0,-1)
	}
</script>

<p>{numbers.join(' + ')} = {sum}</p>

<button on:click={addNumber}>
	숫자 추가하기
</button>

<button on:click={minNumber}>
	숫자 빼기
</button>