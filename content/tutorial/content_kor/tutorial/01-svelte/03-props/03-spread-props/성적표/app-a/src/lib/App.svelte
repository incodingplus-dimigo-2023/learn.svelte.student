<script>
	import Component from "./Component.svelte";

	let arr = [
		{
			name: "김철수",
			korean: 89,
			math: 97,
			english: 78,
			grade:"",
		},
		{
			name: "김영희",
			korean: 64,
			math: 58,
			english: 88,
			grade:"",
		},
		{
			name: "홍길동",
			korean: 92,
			math: 84,
			english: 100,
			grade:"",
		},
	];

</script>

<Component
{...arr[0]}
/>
<Component
{...arr[1]}
/>
<Component
{...arr[2]}
/>
