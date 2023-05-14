<script>
	let time = 0;
	let mouse = false;

	const handleMouseDown = () => {
		time = 0;
		mouse = true;
	};

	const handleMouseUp = () => {
		mouse = false;
	};

	const handleTick = () => {
		
		if (mouse === true) {
			time += 10;
		}
	};

	setInterval(handleTick, 10);
</script>

<div
	on:mousedown={handleMouseDown}
	on:mouseup={handleMouseUp}
	on:mouseleave={handleMouseUp}
>
	{#if mouse === true}
		마우스를 누르고 있습니다.
	{:else}
		총 {time / 1000}초 눌렀습니다.
	{/if}
</div>

<style>
	div {
		width: 100vw;
		height: 100vh;
	}
</style>
