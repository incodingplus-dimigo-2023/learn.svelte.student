<script>
    let str = 'hello world';
      let result = 12345 + 54321 * 12345 / 54321
      let se = '';
      
      str = str.replace('ll', '11')
  
      for(let i = 0; i <= 100; i++){
        if(i % 7 === 0){
          if(i !== 0){
            se += i + ', ';
            if(i == 98) {
              se += i;
            }
          }
        }
      }
  </script>
  
  <br>
  <div>
    1. 12345 + 54321 * 12345 / 54321 의 답은 {result} 입니다.
  </div>
  <div>
    2. {str}에서 l을 모두 1로 바꾸 문자열은 {str} 입니다.
  </div>
  <div>
    3. 1에서 100까지 7의 배수는 {se}입니다.
  </div>
  
  <!-- <ol>
      <li>12345 + 54321 * 12345 / 54321 의 답은 ? 입니다.</li>
      <li>hello wolrd에서 l을 모두 1로 바꾼 문자열은 ? 입니다.</li>
      <li>1에서 100까지 7의 배수는 ? 입니다.</li>
  </ol> -->