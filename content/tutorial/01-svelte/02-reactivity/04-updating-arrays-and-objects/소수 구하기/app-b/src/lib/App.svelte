<script>
	let arr = [];
	const MAX = 100;
  
	const generate = () => {
	  arr = [];
	  
	  let i = 1;
	  const interval = setInterval(() => {
		if (i > MAX) {
		  clearInterval(interval);
		} else {
		  arr.push(i);
		  i++;
		  document.querySelector(".container").innerHTML = arr
			.map((n) => `<div>${n}</div>`)
			.join("");
		}
	  }, 100);
	};
  
	const calculate = () => {
	  arr = arr.filter((n) => {
		for (let i = 2; i <= Math.sqrt(n); i++) {
		  if (n % i === 0) {
			return false;
		  }
		}
		return true;
	  });
	  document.querySelector(".container").innerHTML = arr
		.map((n) => `<div>${n}</div>`)
		.join("");
	};
  </script>
  
  <button on:click={generate}>생성</button>
  <button on:click={calculate}>계산</button>
  
  <div class="container"></div>
  
  <style>
	.container {
	  display: flex;
	  flex-wrap: wrap;
	  width: 100%;
	}
  
	:global(div) {
	  width: 5vw;
	  height: 5vw;
	}
  </style>
  