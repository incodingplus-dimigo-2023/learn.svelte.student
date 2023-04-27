<script>
	import {onMount} from 'svelte';
	let password1;
	let password2;

	/** @type {HTMLInputElement}*/
	let ref1;
	let ref2;

	let check = false

	let isMatched = false
	$: isMatched = password1 && password2 && (password1 === password2)
	
	onMount(async () => {
		ref1.focus();
	})

</script>

<input type="password" bind:value={password1} bind:this={ref1}>
<input type="password" bind:value={password2}>

<div>{isMatched ? "확인" : "비밀번호가 일치하지 않습니다"}</div>

<style>
</style>