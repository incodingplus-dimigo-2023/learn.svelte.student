<script>
	let time = 0
	let isMouseDown = false
  
	$: if(isMouseDown){
		setTimeout(seconde, 1);
    function seconde(){
      time+=1;
    }
	};
 
	
  function down() {
    isMouseDown = true

  }
  function up() {
    isMouseDown = false
  }
</script>

<div on:mousedown={down} on:mouseup={up}>
	{isMouseDown ? "마우스를 누르는 중입니다." : `총 ${time / 1000}초 눌렀습니다.`}
</div>

<style>
	div {
		width: 100vw;
		height: 100vh;
	}
</style>