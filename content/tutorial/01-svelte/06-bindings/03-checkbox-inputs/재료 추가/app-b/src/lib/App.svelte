<script>
	let orders = [{
		name: "패티",
		price: 2000,
		checked: false
	}, {
		name: "치즈",
		price: 300,
		checked: false
	}, {
		name: "베이컨",
		price: 600,
		checked: false
	}, {
		name: "통새우",
		price: 300,
		checked: false
	}, {
		name: "할라피뇨",
		price: 400,
		checked: false
	}, {
		name: "야채",
		price: 400,
		checked: false
	}]

	let totalPrice = 0
	$:{ totalPrice = 0
		for(let i=0; i<orders.length; i++){
			if(orders[i]['checked'] === true){
				totalPrice = totalPrice+orders[i]['price']
			}
		}
	}
</script>

<div class="order">
	{#each orders as i}
		<div>
			<input type="checkbox" bind:checked={i['checked']} />
			<span>{i['name']}</span>
			<span>₩{i['price']}</span>
		</div>
	{/each}
	
	<div>총 : {totalPrice}원</div>
</div>
