<script>
	import Component from "./Component.svelte";

	let arr = [{
		name: "김철수",
		korean: 89,
		math: 97,
		english: 78
	}, {
		name: "김영희",
		korean: 64,
		math: 58,
		english: 88
	}, {
		name: "홍길동",
		korean: 92,
		math: 84,
		english: 100
	}]
</script>
{#each arr as com}
	<Component {...com} />
{/each}