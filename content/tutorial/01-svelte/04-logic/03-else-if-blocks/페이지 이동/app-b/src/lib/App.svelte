<script>
	let page = 1
	function next() {
		if(page <= 3){
			page++;
		}
	}
	function back() {
		if(page >= 0){
			page--;
		}
	}
	function reset() {
		page = 1;
	}
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
		<button on:click={reset}>1 페이지로 돌아가기</button>
	</div>
	{/if}
	<div>
	<button on:click={back}>이전 페이지로</button>
	<button on:click={next}>다음 페이지로</button>
	</div>

