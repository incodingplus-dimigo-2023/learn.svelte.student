<script>
	import Bar from "./Bar.svelte";


	let queue = []
	let num = 0

	const push = () => {
		queue = [...queue, {
			id: num++,
			size: Math.random() * 30 + 10,
			//size: Math.random() * 4 + 5,
			status: "downloading" 
		}]
	}

</script>

<button on:click={push}>다운로드</button>
{#each queue as item (item.id)}
	<div>
		<div>{item.id} 번째 다운로드</div>
		{#if item.status === "downloading"}
			<Bar targetSize={item.size} 
				on:Theend = {(e) => {
					//console.log('main-Theend');
					item.status = e.detail.text;
				}}
			/>
		{:else}
			<div>완료</div>
		{/if}
	</div>
{/each}