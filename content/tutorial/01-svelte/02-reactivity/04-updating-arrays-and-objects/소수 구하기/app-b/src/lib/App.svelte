<script>
    let arr = [];
    const MAX = 100;
    let interval = 0;

    const generate = () => {
        arr = [];
        clearInterval(interval);
        let i = 1;
        interval = setInterval(() => {
            arr = [...arr, i++];
            if (i === 101) clearInterval(interval);
        }, 20);
    };

    const calculate = () => {
        clearInterval(interval);
        let i = 2;
        interval = setInterval(() => {
            for (let k = i; k <= 100; k++) {
                for (let j = 2; j * j <= k; j++) {
                    if (k % j === 0) {
                        i = k + 1;
                        let index = arr.indexOf(k);
                        arr = [...arr.slice(0, index), ...arr.slice(index + 1)];
                        return;
                    }
                }
            }
        }, 20);
    };
</script>

<button on:click={generate}>생성</button>
<button on:click={calculate}>계산</button>

<div class="container">
    {@html arr.map((n) => `<div>${n}</div>`).join("")}
</div>

<style>
    .container {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
    }

    :global(div) {
        width: 5vw;
        height: 5vw;
    }
</style>