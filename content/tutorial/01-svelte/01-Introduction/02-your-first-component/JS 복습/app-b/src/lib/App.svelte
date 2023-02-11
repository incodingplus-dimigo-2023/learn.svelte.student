<script>
    let str = 'hello world';
		let answer1 = 12345 + 54321 * 12345 / 54321;
		let answer2 = str.replaceAll('l', '1')
		let answer3 = '';
		for(let i = 1; i <= 100; i ++){
			if(i * 7 <= 100){
				answer3 = `${answer3},  ${String(i * 7)}`;
			}
		}
		answer3 = answer3.replace(', ', '');
</script>

<ol>
    <li>12345 + 54321 * 12345 / 54321 의 답은 {answer1} 입니다.</li>
    <li>hello wolrd에서 l을 모두 1로 바꾼 문자열은 {answer2} 입니다.</li>
    <li>1에서 100까지 7의 배수는 {answer3} 입니다.</li>
</ol>