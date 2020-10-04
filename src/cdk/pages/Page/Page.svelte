<script>
  import { fade } from "svelte/transition";
</script>

<style>
  .page {
    padding: 2em;
  }
</style>

<div
  class="page"
  in:fade={{ delay: 100, duration: 200 }}
  out:fade={{ delay: 0, duration: 100 }}>
  <slot />
</div>
