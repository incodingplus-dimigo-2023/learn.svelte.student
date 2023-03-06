<script>

</script>

<div class="container">
    <div>
        <div class="first">background-color: transparent;<br>
          color: canvastext;<br>
          padding: 0;
          </div>
          <br><br>
          <div>background-color: blue;<br>
           color: canvastext;<br>
           padding: 0;
          </div>
          <br><br>
          <div>
    <div class="view , second">텍스트</div><br>
            background-color: blue;<br>
             color: red<br>
            padding: 0;
          </div><br>
          <div class="view , third">텍스트</div><br>
          <br><br>
          <div>
            background-color: blue;<br>
            color: red;<br>
            padding: 100px;
          </div><br>
          <div class="view , quad">텍스트</div><br>
    </div>
    <div class="view">텍스트</div>
        
</div>

<style>
    .container{
        display: flex;
        padding: 30px;
    }
    .view {
        width: 100px;
        height: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 30px;
    }
    .second {
          background-color: blue;
           color: canvastext;
           padding: 0;
    }
    .third{
    background-color: blue;
    color: red;
    padding: 0;
}

    .quad{
    background-color: blue;
    color: red;
    padding: 100px;
}
</style>
