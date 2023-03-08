<script>
	let password1;
	let password2;

	let isMatched = false

	$: if(password1 === password2 && password1 !== undefined && password2 !== undefined) {
		isMatched = true
		console.log(password1)
	} else {
		isMatched = false
	}
</script>


<input type="password" bind:value={password1}>
<input type="password" bind:value={password2}>

{#if isMatched}
	<div>확인</div>
	{:else}
	<div>비밀번호가 일치하지 않습니다</div>

{/if}

