<script>
	export let height;
	export let weight;

	let BMI;
	let state;

	$: {
		const heightInMeters = height / 100; // 키를 cm에서 m로 변환
		BMI = weight / (heightInMeters * heightInMeters);

		if (BMI >= 25.0) {
			state = '비만';
		} else if (BMI >= 23.0 && BMI <= 24.9) {
			state = '과체중';
		} else if (BMI >= 18.5 && BMI <= 22.9) {
			state = '정상';
		} else {
			state = '저체중';
		}
	}
</script>

<div class="container">
	<div>신장: {height} cm</div>
	<div>체중: {weight} kg</div>
	<div>BMI: {BMI.toFixed(2)}</div>
	<div class:danger={state !== '정상'}>위험도 : {state}</div>
</div>

<style>
	.container {
		border: 1px solid black;
		padding: 10px;
		margin: 10px;
	}

	.danger {
		color: red;
	}
</style>
