<script>
    let str = "hello world";
    var a = str.replace(/l/gi, "1");
    console.log("str >" + str);
    console.log("a   >" + a);
    let num = 12345 + (54321 * 12345) / 54321;
    let basu = 0;
    function main() {
        for (let i = 1; i <= 100; i++) {
            if (i % 7 == 0) {
                basu += i+', ';
            }
        }
        return 0;
    }
    main();
</script>

<ol>
    <li>12345 + 54321 * 12345 / 54321 의 답은 {num} 입니다.</li>
    <li>hello wolrd에서 l을 모두 1로 바꾼 문자열은 {a} 입니다.</li>
    <li>1에서 100까지 7의 배수는 {basu} 입니다.</li>
</ol>
