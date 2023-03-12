<script>
	let password1;
	let password2;

	let isMatched = false
	$:{if(password1&&password2){
		if(password1 === password2&&password1 !== ''&&password2 !== '')isMatched = true
		else isMatched = false
	}
}
</script>

<input type="password" bind:value={password1}>
<input type="password" bind:value={password2}>

{#if isMatched === false}
	<div>비밀번호가 일치하지 않습니다</div>
	{:else}<div>확인</div>
{/if}
