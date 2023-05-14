<script>
	import Component from "./Component.svelte";
  
	const arr = [
	  {
		name: "react",
		color: "#61DBFB"
	  },
	  {
		name: "vue",
		color: "#3FB984"
	  },
	  {
		name: "svelte",
		color: "#FF3E00"
	  }
	];
  </script>
  
  <style>
	.button {
	  display: flex;
	  align-items: center;
	  justify-content: space-around;
	  padding: 30px;
	  margin: 10px;
	  width: fit-content;
	  border-radius: 9999px;
	  background-color: white;
	  transition: transform 0.3s ease;
	}
  
	.button:hover {
	  cursor: pointer;
	}
  
	.button img {
	  width: 100px;
	  height: 100px;
	}
  
	.button div {
	  font-size: 80px;
	  margin-left: 30px;
	  font-weight: bold;
	}
  </style>
  
  {#each arr as item}
	<Component name={item.name} color={item.color} classProp="button" />
  {/each}
  