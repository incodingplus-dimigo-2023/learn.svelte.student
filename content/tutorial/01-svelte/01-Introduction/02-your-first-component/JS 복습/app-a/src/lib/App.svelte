<script>
console.log(`12345 + 54321 * 12345 / 54321 의 답은 ${12345 + 54321 * 12345 / 54321} 입니다.
hello wolrd에서 l을 모두 1로 바꾼 문자열은 he11ow wo1rd 입니다.`);
let number = [];
let count = 0;
for(let i = 0; i < 100; i++){
    if(i % 7 === 0){
        count++;
        // @ts-ignore
        number = number + ' ' + i;
    }
}
console.log(`1에서 100까지 7의 배수는 ${number} 입니다.`);
</script>