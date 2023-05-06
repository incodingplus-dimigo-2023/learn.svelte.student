<script>
	let arr = [];
	const MAX = 100;
	const generate = () => {
		const interval = setInterval(() => {
			if (arr.length === MAX) {
				clearInterval(interval);
			} else {
				arr = [...arr, arr.length + 1];
			}
		}, 100);
	};
	const calculate = () => {
		let i = 2;
		const interval = setInterval(() => {
			if (i > Math.max(...arr)) {
				clearInterval(interval);
			} else {
				for (let j = 0; j < arr.length; j++) {
					if (arr[j] !== null && arr[j] !== i && arr[j] % i === 0) {
						arr[j] = null;
						i--
						break;
					}}}
			i++;
		}, 100);
	};
</script>

<button on:click={generate}>생성</button>
<button on:click={calculate}>계산</button>
<div class="container">
	{@html arr
		.filter((n) => n !== null)
		.map((n) => `<div>${n}</div>`)
		.join("")}
</div>

<style>
	.container {
		display: flex;
		flex-wrap: wrap;
		width: 100%;
	}
	:global(div) {
		width: 5vw;
		height: 5vw;
	}
</style>
