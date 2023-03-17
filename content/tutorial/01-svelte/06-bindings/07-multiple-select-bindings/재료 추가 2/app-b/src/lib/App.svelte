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
  $: {
    totalPrice = selected.reduce((acc, cur, i) => {
      acc = Number(cur) + Number(acc);
    });
  }
</script>

<select bind:value={selected}>
  {#each menus as arr, i}
    <option value={arr.price}>수제 {arr.name}</option>
  {/each}
</select>
<div>총 : {totalPrice}원임</div>

<div>{selected}</div>
