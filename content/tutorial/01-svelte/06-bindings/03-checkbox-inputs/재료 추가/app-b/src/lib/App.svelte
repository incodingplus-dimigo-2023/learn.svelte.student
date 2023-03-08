<script>
	let orders = [{
		name: "패티",
		price: 2000,
		checked: -1
	}, {
		name: "치즈",
		price: 300,
		checked: -1
	}, {
		name: "베이컨",
		price: 600,
		checked: -1
	}, {
		name: "통새우",
		price: 300,
		checked: -1
	}, {
		name: "할라피뇨",
		price: 400,
		checked: -1
	}, {
		name: "야채",
		price: 400,
		checked: -1
	}]
	let picks = []
	let totalPrice = 0;
	
	

</script>

<div class="order">
	{#each orders as {name, price, checked}, i}
		<div>
			<input type="checkbox" bind:group={picks} name="picks" value={i} on:input={() => {
				checked = checked * -1;
				totalPrice = totalPrice + (orders[i].price * checked * -1);

			}}> <span>{name}</span> <span>₩{price}</span> 
		</div>
	{/each}

	<div>총 : {totalPrice}원</div>
</div>
