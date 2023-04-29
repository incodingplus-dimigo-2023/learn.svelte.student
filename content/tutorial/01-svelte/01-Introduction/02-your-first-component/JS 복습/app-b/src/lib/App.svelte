<script>
    let str = 'hello world';
    const math = (a,b) => {return  a*b/b+a};
    let arr = [];
    const num = (a) => {
        for(let i = 1; i < 100; i++){
        if(i % a === 0){
            arr.push(i);
        }
    }
    return arr.join(' , ');
    };
</script>

<ol>
    <li>12345 + 54321 * 12345 / 54321 의 답은 {math(12345,54321)} 입니다.</li>
    <li>hello wolrd에서 l을 모두 1로 바꾼 문자열은 {str.replaceAll('l','1')} 입니다.</li>
    <li>1에서 100까지 7의 배수는 {num(7)} 입니다.</li>
</ol>