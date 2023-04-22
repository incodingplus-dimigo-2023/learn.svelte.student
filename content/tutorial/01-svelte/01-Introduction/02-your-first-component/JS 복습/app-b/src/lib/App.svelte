<script>
    let str = 'hello world';
    let to = str.split('')
    for(let i = 0; i < to.length; i++ ){
        if(to[i] === 'l'){
            to[i] = '1'
        }
    }
    let result = []
    for(let i = 1; i < 101; i++){
        if(i % 7 === 0){
            result.push(i);
        }
    }

</script>
<ol>
    <li>12345 + 54321 * 12345 / 54321 의 답은 {12345 + 54321 * 12345 / 54321} 입니다.</li>
    <li>hello wolrd에서 l을 모두 1로 바꾼 문자열은 {to.join('')} 입니다.</li>
    <li>1에서 100까지 7의 배수는 {result} 입니다.</li>
</ol>