<script>
    let str = 'hello world';
    let num = 12345 + 54321 * 12345 / 54321;
    let str2 = str.replaceAll('l','1');
    let seven = [];
    for(let i = 1; i < 100; i++){
        if(i%7===0){
            seven.push(i);
        }
    }
</script>

<ol>
    <li>12345 + 54321 * 12345 / 54321 의 답은 {num}입니다.</li>
    <li>hello wolrd에서 l을 모두 1로 바꾼 문자열은 {str2}입니다.</li>
    <li>1에서 100까지 7의 배수는 {seven.join(', ')}입니다.</li>
</ol>