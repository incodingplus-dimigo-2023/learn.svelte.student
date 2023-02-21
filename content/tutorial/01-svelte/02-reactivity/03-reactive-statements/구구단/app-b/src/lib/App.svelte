<script>
    let number = 0;
    let multiplicationTable = "";
    let arr =[];
    $:if(number !==0) {
        arr = [];
        for(let i = 1; i<=9; i++ ){
            arr.push(`${number} X ${i} = ${i*number}`);
        };
    };

    const setNumber = (num) => {
        number = num
    }
</script>

<div>
    <button on:click={() => setNumber(3)}>3단</button>
    <button on:click={() => setNumber(6)}>6단</button>
    <button on:click={() => setNumber(9)}>9단</button>
</div>
<div>
    {@html arr.join('<br>')}
</div>