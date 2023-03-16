<script>
	const menus = [{
		name: "패티",
		price: 2000,
	}, {
		name: "치즈",
		price: 300,
	}, {
		name: "베이컨",
		price: 600,
	}, {
		name: "통새우",
		price: 300,
	}, {
		name: "할라피뇨",
		price: 400,
	}, {
		name: "야채",
		price: 400,
	}]

	let selected = []

	$: totalPrice = selected.reduce((pre, cur) => {return pre + cur.price}, 0);
</script>

<select bind:value={selected} on:change={() => console.log(selected)} multiple>
	{#each menus as v}
		<option value="{v}">{v.name}</option>
	{/each}
</select>
<div>총 : {totalPrice}원</div>
