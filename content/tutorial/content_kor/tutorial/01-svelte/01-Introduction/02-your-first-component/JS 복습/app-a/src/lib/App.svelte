<script>
    let str = 'hello world';

    let x = 12345 + 54321 * 12345 / 54321

    let change = str.replaceAll('l', '1');

    let seven = '';

    for(let i = 1; i <= 100; i++) {
        if(i % 7 === 0 && i === 7) {
            seven = `${i}`;
        }
        else if(i % 7 === 0) {
            seven = `${seven}, ${i}`;
        }
    }
</script>

<ol>
    <li>12345 + 54321 * 12345 / 54321 의 답은 {x} 입니다.</li>
    <li>hello wolrd에서 l을 모두 1로 바꾼 문자열은 {change} 입니다.</li>
    <li>1에서 100까지 7의 배수는 {seven} 입니다.</li>
</ol>