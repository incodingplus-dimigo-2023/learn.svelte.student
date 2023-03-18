<script>
	const menus = [
		{
			name: "패티",
			price: 2000,
		},
		{
			name: "치즈",
			price: 300,
		},
		{
			name: "베이컨",
			price: 600,
		},
		{
			name: "통새우",
			price: 300,
		},
		{
			name: "할라피뇨",
			price: 400,
		},
		{
			name: "야채",
			price: 400,
		},
	];

	let selected = [];

	let totalPrice = 0;
	function pri() {
		totalPrice = 0;
		for (let i = 0; i < selected.length; i++) {
			const arr = selected[i];
			totalPrice += arr;
		}
	}
	pri();
</script>

<select bind:value={selected} multiple>
	{#each menus as food}
		<option value={food.price}>{food.name}</option>
	{/each}
</select>
<div>총 : {totalPrice}원</div>
