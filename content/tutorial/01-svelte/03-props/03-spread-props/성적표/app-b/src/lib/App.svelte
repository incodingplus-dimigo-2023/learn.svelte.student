<script>
	import Component from "./Component.svelte";

	let arr = [{
		name: "김철수",
		korean: 89,
		math: 97,
		english: 78,
		ko: 'B',
		ma : 'A',
		en : 'C'
	}, {
		name: "김영희",
		korean: 64,
		math: 58,
		english: 88,
		ko: 'D',
		ma : 'F',
		en : 'B'
	}, {
		name: "홍길동",
		korean: 92,
		math: 84,
		english: 100,
		ko: 'A',
		ma : 'B',
		en : 'A'
	}]
</script>

<Component {...arr[0]}/>
<Component {...arr[1]}/>
<Component {...arr[2]}/>