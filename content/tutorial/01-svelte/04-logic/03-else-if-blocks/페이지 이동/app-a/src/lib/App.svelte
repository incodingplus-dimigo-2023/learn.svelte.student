<script>
	let page = 1;

	function minus() {
		page = page - 1;
	}
	function plus() {
		page = page + 1;
	}
	function one() {
		page = 1;
	}
</script>

{#if page == 1}
	<div>
		<h1>첫 번째 페이지입니다.</h1>
		<div />
	</div>
{:else if page == 2}
	<div>
		<h1>두 번째 페이지입니다.</h1>
		<div />
	</div>
{:else if page == 3}
	<div>
		<h1>마지막 페이지입니다.</h1>
		<div>감사합니다.</div>
	</div>
{:else if page > 3}
	<div>
		<h1>잘못된 페이지입니다.</h1>
		<button on:click={one}>1 페이지로 돌아가기</button>
	</div>
{:else if page < 1}
	<div>
		<h1>잘못된 페이지입니다.</h1>
		<button on:click={one}>1 페이지로 돌아가기</button>
	</div>
{/if}
<div>
	<button on:click={minus}>이전 페이지로</button>
	<button on:click={plus}>다음 페이지로</button>
</div>
