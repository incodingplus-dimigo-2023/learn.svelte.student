<script>
	import Component from "./Component.svelte";

	let arr = [
		{
			name: "김철수",
			korean: 89,
			math: 97,
			english: 78,
			// kgrade:"B",
			// mgrade:"A",
			// egrade:"C",
		},
		{
			name: "김영희",
			korean: 64,
			math: 58,
			english: 88,
			// kgrade:"D",
			// mgrade:"F",
			// egrade:"B",
		},
		{
			name: "홍길동",
			korean: 92,
			math: 84,
			english: 100,
			// kgrade:"A",
			// mgrade:"B",
			// egrade:"A",
		},
	];
</script>

<Component
	name={arr[0].name}
	korean={arr[0].korean}
	math={arr[0].math}
	english={arr[0].english}
/>
<Component
	name={arr[1].name}
	korean={arr[1].korean}
	math={arr[1].math}
	english={arr[1].english}
/>
<Component
	name={arr[2].name}
	korean={arr[2].korean}
	math={arr[2].math}
	english={arr[2].english}
/>
