<script>
	export let target;

	let size = 0;
	let gage = 0;
	
	const interval = setInterval(() => {
		size += speed;
		gage = Math.min(Math.round((size / target) * 100), 100);

		if (size >= target) {
			clearInterval(interval);
		}
	}, 1000);

	const speed = 1;
</script>

<div class="container">
	<div style="width: {gage}%" class="bar"></div>
</div>

<style>
	.container {
		position: relative;
		border: 1px solid black;
		height: 30px;
	}

	.bar {
		position: absolute;
		background: green;
		height: 100%;
	}
</style>
