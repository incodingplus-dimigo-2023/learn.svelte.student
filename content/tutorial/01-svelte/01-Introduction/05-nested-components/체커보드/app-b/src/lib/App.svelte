<script>
  import Black from "./Black.svelte";
	import White from "./White.svelte";
</script>

<style>
  .flex-container {
    display: inline-flex;
    flex-direction: column;
    border: 1px solid gray
  }

  .flex-container>div {
    display: flex;

  }
</style>
<div class="flex-container">
  <div class="내가 만든 쿠키">
    <Black />
    <White />
    <Black />
    <White />
  </div>
  <div class="내가 만든 쿠키">
    <White />
    <Black />
    <White />
    <Black />
  </div>
  <div class="내가 만든 쿠키">
    <Black />
    <White />
    <Black />
    <White />
  </div>
  <div class="내가 만든 쿠키">
    <White />
    <Black />
    <White />
    <Black />
  </div>
</div>
