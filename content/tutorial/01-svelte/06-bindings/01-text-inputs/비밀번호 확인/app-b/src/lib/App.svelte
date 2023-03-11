<script>
  let password1;
  let password2;
  let isMatched = false;
  $: isMatched = Boolean(password1 === password2);
</script>

<input type="password" bind:value={password1} />
<input type="password" bind:value={password2} />

<div>
  {#if isMatched === false}
    비밀번호가 틀렸다
  {:else}
    오 맞음
  {/if}
</div>
