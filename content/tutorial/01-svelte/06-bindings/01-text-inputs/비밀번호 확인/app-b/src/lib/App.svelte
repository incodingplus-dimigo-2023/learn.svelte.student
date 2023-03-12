<script>
	let password1;
	let password2;

	let isMatched = false;
	function is() {
		if (password1 === password2) {
			isMatched = true;
		}
	}
</script>

<input type="password" bind:value={password1} on:input={is} />
<input type="password" bind:value={password2} on:input={is} />

{#if isMatched}
	<div>확인</div>
{:else}
	<div>비밀번호가 일치하지 않습니다.</div>
{/if}
