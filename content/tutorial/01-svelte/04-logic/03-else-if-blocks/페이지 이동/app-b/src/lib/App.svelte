<script>
	let page = 1

</script>

	{#if page === 1}
	<div>
		<h1>첫 번째 페이지입니다.</h1>
		<div></div>
	</div>
	{:else if page === 2}
	<div>
		<h1>두 번째 페이지입니다.</h1>
		<div></div>
	</div>
{:else if page === 3}
<div>
	<h1>마지막 페이지입니다.</h1>
	<div>감사합니다.</div>
</div>
{:else}
<div>
	<h1>잘못된 페이지입니다.</h1>
	<button on:click={() => page = 1}>1 페이지로 돌아가기</button>
</div>
{/if}

{#if page === 1 || page === 2 || page === 3}
<div>
	<button on:click={() => page--}>이전 페이지로</button>
	<button on:click={() => page++}>다음 페이지로</button>
</div>
{/if}
