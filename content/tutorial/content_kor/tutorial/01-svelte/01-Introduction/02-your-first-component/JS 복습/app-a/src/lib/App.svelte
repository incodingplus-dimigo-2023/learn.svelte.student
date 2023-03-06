<script>
    let str = 'hello world';
    let one = 12345 + 54321 * 12345 / 54321
    let two = str.replaceAll('l', '1');
    let three = [];
    let count =0;
    for(let i=7; i<=100; i+=7){
        
        three[count]=i;
        count+=1;
    }
    let four = three;
</script>

<ol>
    <li>12345 + 54321 * 12345 / 54321 의 답은 {one} 입니다.</li>
    <li>hello wolrd에서 l을 모두 1로 바꾼 문자열은 {two} 입니다.</li>
    <li>1에서 100까지 7의 배수는 {four} 입니다.</li>
</ol>