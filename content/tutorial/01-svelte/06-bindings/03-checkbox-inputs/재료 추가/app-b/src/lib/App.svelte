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
	$: totalPrice = orders.filter(v => v.checked).reduce((a,v) => a + v.price , 0)
	
	

</script>

<div class="order">
	{#each orders as {name, price, checked}, i}
		<div>
			<label for="order-{i}">
				<input type="checkbox" bind:checked id="order-{i}">  <span>{name}</span> <span>₩{price}</span> 
			</label>
		</div>
	{/each}

	<div>총 : {totalPrice}원</div>
</div>
