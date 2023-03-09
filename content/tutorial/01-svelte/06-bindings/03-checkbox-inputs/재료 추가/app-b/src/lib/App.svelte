<script>
  let orders = [
    {
      name: "패티",
      price: 2000,
      checked: false,
    },
    {
      name: "치즈",
      price: 300,
      checked: false,
    },
    {
      name: "베이컨",
      price: 600,
      checked: false,
    },
    {
      name: "통새우",
      price: 300,
      checked: false,
    },
    {
      name: "할라피뇨",
      price: 400,
      checked: false,
    },
    {
      name: "야채",
      price: 400,
      checked: false,
    },
  ];
  let total = [];
  let totalPrice = 0;

  $: {
    totalPrice = total.reduce((acc, cur) => {
      return (acc += cur.price);
    }, 0);
  }
</script>

<div class="order">
  {#each orders as arr, i}
    <div>
      <input type="checkbox" value={orders[i]} bind:group={total} />
      {orders[i].name} ₩{orders[i].price}
    </div>
  {/each}
  <div>총 : {totalPrice} 원</div>
</div>
