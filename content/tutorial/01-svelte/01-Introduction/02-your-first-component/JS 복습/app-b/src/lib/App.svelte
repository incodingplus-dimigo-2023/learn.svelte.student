<script>
    let str = 'hello world';
    let a = 12345 + 54321 * 12345 / 54321;
		let b = str.replaceAll('l', '1');
		let arr = [1, 2, 3, 4, 5, 6 ,7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
		let s = arr.map(x => x * 7);
		let f = x => x < 100;
		let c = s.filter(f).join(', ');
		
</script>

<ol>
    <li>12345 + 54321 * 12345 / 54321 의 답은 {a} 입니다.</li>
    <li>hello wolrd에서 l을 모두 1로 바꾼 문자열은 {b} 입니다.</li>
    <li>1에서 100까지 7의 배수는 {c} 입니다.</li>
</ol>