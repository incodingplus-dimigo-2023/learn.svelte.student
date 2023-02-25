<script>
    import { time_ranges_to_array } from "svelte/internal";


	let number = 5;
	let interval = null;
	let st = false;

	const reset = () => {
		number = 5;
	};
	const pause = () => {
		st = false;
	};
	const start = () => {
		st = true;
		time();
	};
	// $: {
	// 	{
			function time () {
				if (st) {
				//interval = setInterval(() => {
					number = number - 1;
					if (number === 0) {
						alert("종료");
						return;
						//clearInterval(interval);
					}
				//}, 1000);
				setTimeout(time, 1000);
			}
		}
//	}
//}
</script>

<div>
	<div class="number">{number}</div>
</div>
<div>
	<button on:click={start}>시작</button>
	<button on:click={pause}>일시 정지</button>
	<button on:click={reset}>초기화</button>
</div>

<style>
	.number {
		font-size: 100px;
	}
</style>
