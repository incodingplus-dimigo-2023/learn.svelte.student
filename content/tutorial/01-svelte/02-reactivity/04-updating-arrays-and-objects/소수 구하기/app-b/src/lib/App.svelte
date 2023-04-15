<script>
	let arr = [];
	const MAX = 100;

	let isRunning = false;
	let isAlreadyCalc = false;

	const generate = () => {
		if(isRunning === true){
			return;
		}

		isRunning = true;
		arr = [];
		
		let i = 1;
		const interval = setInterval(() => {
			arr = [...arr, i];

			if(i === MAX){
				clearInterval(interval);
				isRunning = false;
				isAlreadyCalc = false;
				return;
			}

			i += 1;
		}, 100);
	}

	const calculate = () => {
		if(isRunning === true || isAlreadyCalc === true){
			return;
		}
		
		isRunning = true;
		arr = [...arr.slice(1)];

		let value = 2;	//	2 ~ 100 까지 검사할때 활용한다.
		const interval = setInterval(() => {
			// Interval 마다 숫자를 최대 1개 제거 하는 방식

			// value 가 소수라면 arr 에서 value 가 있는지 찾고 제거한다.
			for(let i = 2; i < (value - 1); i++){
				if(value % i === 0){
					let index = arr.indexOf(value);
					if(index !== -1){
						// arr 에서 index 번째를 제거 한다.
						arr = [...arr.slice(0,index), ...arr.slice(index+1)];
					}
					break;
				}
			}

			value++;

			if(value > MAX){
				clearInterval(interval);
				isRunning = false;
				isAlreadyCalc = true;
				return;
			}
		}, 100)
	}

	const calculate2 = () => {
		if(isRunning === true || isAlreadyCalc === true){
			return;
		}
		
		isRunning = true;
		arr = [...arr.slice(1)];

		let i = 2;
		const interval = setInterval(() => {
			// 에라토스테네스의 체 방식
			// arr : 2 ~ 100

			// 2의 배수 제거, 3의 배수 제거 ... 50의 배수 제거
			// 배수 제거 시 자기 자신보다 큰 수만 검사
			let brr = [];
			
			while(arr.length > 0){
				let number = arr.shift();
				if( number <= i || number % i !== 0 ){
					brr.push(number);
				}
			}

			i++;

			arr = brr;

			if( i > MAX/2){
				clearInterval(interval);
				isRunning = false;
				isAlreadyCalc = true;
				return;
			}

		}, 100);
	}

</script>

<button on:click={generate}>생성</button>
<button on:click={calculate}>계산</button>

<div class="container">
	{@html arr.map(n => `<div>${n}</div>`).join("")}
</div>

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
