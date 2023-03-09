<script>
	let password1;
	let password2;

	$: isMatched = (password1 === password2);
</script>

<input type="password" bind:value={password1}>
<input type="password" bind:value={password2}>

{#if password1 && password2}
	<div>{isMatched? '확인':'비밀번호가 일치하지 않습니다'}</div>
{/if}