<script>
	import Bar from "./Bar.svelte";



	let queue = [];
	let num = 0;
	let dhkstjd = 0;
	const push = () => {
		queue = [
			...queue,
			{
				id: num++,
				size: Math.random() * 30 + 10,
				status: "downloading",
			},
		];
	};

	const fine = (event) => {
		dhkstjd = event.detail.text;
	};
</script>

<button on:click={push}>다운로드</button>
{#each queue as item (item.id)}
	<div>
		<div>{item.id} 번째 다운로드</div>
		{#if item.status === "downloading"}
			<Bar targetSize={item.size} />
		{:else}
			<Bar on:fin={fine} />
			<div>{dhkstjd}</div>
		{/if}
	</div>
{/each}
