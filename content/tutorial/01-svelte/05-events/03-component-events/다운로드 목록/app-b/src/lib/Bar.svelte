<script>
    export let targetSize;
    import { createEventDispatcher } from "svelte";
    
    const downloadSpeed = 1;
    let currentSize = 0;

    

    const dispatch = createEventDispatcher();

    const finish = () => {
        dispatch("fin", {
            text: "안뇽~",
        });
    };
    let interval = setInterval(() => {
        currentSize = currentSize + downloadSpeed;
        if (currentSize > targetSize) {
            return;
        }
    }, 1000);

    let percentage = 0;
    $: percentage = Math.min(Math.round((currentSize / targetSize) * 100), 100);
</script>

<div class="container">
    <div style="width: {percentage}%" class="bar" />
</div>

<style>
    .container {
        position: relative;
        border: 1px solid black;
        height: 30px;
    }
    .bar {
        position: absolute;
        background: green;
        height: 100%;
    }
</style>
