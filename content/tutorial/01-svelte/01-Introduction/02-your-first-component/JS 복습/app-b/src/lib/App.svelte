<script>
    let array = ["h", "e", "l", "l", "o", " ", "w", "o", "r", "l", "d"];

    for (let i = 0; i < array.length; i++) {
        array = array.map((item) => {
            if (item === "l") {
                return "1";
            } else {
                return item;
            }
        });
    }
    let brr = "";
    let a = 12345 + (54321 * 12345) / 54321;
    for (let j = 1; j <= 100; j++) {
        if (j % 7 === 0) {
            brr = brr + " " + j;
        }
    }
</script>

<ol>
    <li>12345 + 54321 * 12345 / 54321 의 답은 {a} 입니다.</li>
    <li>hello wolrd에서 l을 모두 1로 바꾼 문자열은 {array.join("")} 입니다.</li>
    <li>1에서 100까지 7의 배수는 {brr} 입니다.</li>
</ol>
