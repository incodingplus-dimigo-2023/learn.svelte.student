<script>
    let sutja = 12345 + (54321 * 12345) / 54321;

    let str = "hello world";
    let arr = Array.from(str);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "l") {
            arr[i] = "1";
        }
    }
    str = arr.join("");

    let arr2 = [];
    for (let i = 1; i < 100; i++) {
        if (i % 7 === 0) {
            arr2.push(` ${i}`);
        }
    }
</script>

<ol>
    <li>12345 + 54321 * 12345 / 54321 의 답은 {sutja} 입니다.</li>
    <li>hello wolrd에서 l을 모두 1로 바꾼 문자열은 {str} 입니다.</li>
    <li>1에서 100까지 7의 배수는 {arr2} 입니다.</li>
</ol>
