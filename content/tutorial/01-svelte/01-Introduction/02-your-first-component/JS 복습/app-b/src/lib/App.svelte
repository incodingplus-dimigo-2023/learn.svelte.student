<script>
    let a = 12345 + 54321 * 12345 / 54321;
    let e = '';
    let str = 'hello world';
    let arr = str.split('');
    let num = 0;
    for(let i = 0; i < 3; i++) {
        num = arr.indexOf('l');
        arr.splice(num, 1, '1');
        e = arr.join('')
    }
    let c = [];
    let d = '';
    for(let i = 1; i < 100; i++) {
        if(!(i % 7 === 0)) {
            continue;
        }
        c.push(i)
        d = c.join(', ')
    }
</script>
<ol>
    <li>12345 + 54321 * 12345 / 54321 의 답은 {a} 입니다.</li>
    <li>hello world에서 l을 모두 1로 바꾼 문자열은 {e} 입니다.</li>
    <li>1에서 100까지 7의 배수는 {d} 입니다.</li>
</ol>