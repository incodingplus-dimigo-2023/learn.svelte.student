<script>
	import { slide } from 'svelte/transition';

	/** @type {import('$lib/types').PartStub[]}*/
	export let index;

	/** @type {import('$lib/types').Exercise} */
	export let current;

	let is_open = false;
</script>

<header class:is_open>
	<!-- we don't want this to be keyboard-navigable, because the menu button to the left does that job better -->
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<h1 on:click={() => (is_open = !is_open)}>
		Part {current.part.index + 1} <span class="separator">/</span>
		{current.chapter.slug} <span class="separator">/</span>
		<strong>{current.slug}</strong>
	</h1>
	{#if is_open}
		<div transition:slide>
			{#each index as part, ind}
				{#each part.chapters as chap}
					{#each chap.exercises as ex}
						<div>
							Part {ind + 1} <span class="separator">/</span> {chap.slug} <span class="separator">/</span> <a on:click={() => is_open = false} href="/{ex.slug}">{ex.title}</a>
						</div>
					{/each}
				{/each}
			{/each}
		</div>
	{/if}
</header>

<style>
	header {
		background: ghostwhite;
		border-bottom: 1px solid var(--sk-back-4);
		border-right: 1px solid var(--sk-back-4);
		padding: 0;
		box-sizing: border-box;
		user-select: none;
		transition: 0.3s;
	}
	header.is_open{
		background: darkgray;
	}
	header > div{
		background-color: ghostwhite;
		height: 14rem;
		overflow: auto;
	}

	header strong,
	header h1 {
		font-size: 1.4rem;
	}

	header strong {
		color: var(--sk-theme-1);
	}

	header h1 {
		color: var(--sk-text-2);
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
		font-weight: 400;
		padding:1rem;
		flex: 1;
	}

	header h1:hover{
		background-color: rgba(0, 0, 0, 0.3);
		color:ghostwhite;
	}
	header.is_open h1:hover{
		background-color: rgba(0, 0, 0, 0.7);
		color:white;
	}
</style>
