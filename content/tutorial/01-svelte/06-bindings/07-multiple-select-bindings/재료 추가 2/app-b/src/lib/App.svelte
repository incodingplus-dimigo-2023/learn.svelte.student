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

	let totalPrice = 0
	$: {
		totalPrice = 0
		for(let i=0;i < selected.length; i++){
			for(let j=0; j<menus.length; j++){
				if(selected[i] === menus[j]['name']){
					totalPrice = totalPrice+menus[j]['price']
				}
			}
		}
	}
</script>

<select bind:value={selected} multiple>
	{#each menus as {name}}
		<option>{name}</option>
	{/each}
</select>
<div>총 : {totalPrice}원</div>
