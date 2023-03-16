<!-- <script>
	let meat = false;
	let cheese = false;
	let bacon = false;
	let	shrimp = false;
	let pepper = false;
	let vege = false;

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

	
</script>

<div class="order">
	<input type="checkbox" bind:checked={meat}> 패티 ₩2000 <br>
	<input type="checkbox" bind:checked={cheese}> 치즈 ₩300 <br>
	<input type="checkbox" bind:checked={bacon}> 베이컨 ₩600 <br>
	<input type="checkbox" bind:checked={shrimp}> 통새우 ₩300 <br>
	<input type="checkbox" bind:checked={pepper}> 할라피뇨 ₩400 <br>
	<input type="checkbox" bind:checked={vege}> 야채 ₩400
	<div>총 : {totalPrice}원</div>
</div> -->

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

	$: totalPrice = orders.filter(v=> v.checked).reduce((a,v) => a + v.price, 0);
</script>

<div class="order">
  {#each orders as {name, price, checked}, ind}
    <div>
        <label for ="order-{ind}">
          <input id="order-{ind}" type="checkbox" bind:checked> {name} ₩{price}
        </label>
    </div>
  {/each}
	<div>총 : {totalPrice}원</div>
</div>
