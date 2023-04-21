<script>
	let page = 1
	const nextpage = () => {
		page += 1;
	};

	const prepage = () => {
		page = page - 1;
	};

	const startpage = () => {
		page = 1;
	};
</script>

	{#if page === 1}
	<div>
		<h1>첫 번째 페이지입니다.</h1>
		<div>내 이름은 홍길동입니다.</div>
	</div>
	{:else if page === 2}
	<div>
		<h1>두 번째 페이지입니다.</h1>
		<div>내 나이는 15살 입니다.</div>
	</div>
	{:else if page === 3}
	<div>
		<h1>마지막 페이지입니다.</h1>
		<div>감사합니다.</div>
	</div>
	{:else}
	<div>
		<h1>잘못된 페이지입니다.</h1>
		<button on:click={startpage}>1 페이지로 돌아가기</button>
	</div>
	{/if}

	{#if 4 > page && page> 0}
	<div>
		<button on:click={prepage}>이전 페이지로</button>
		<button on:click={nextpage}>다음 페이지로</button>
	</div>
	{/if}
