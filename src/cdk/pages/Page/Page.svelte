<script>
  import { blur } from "svelte/transition";
</script>

<style>
  .page {
    padding: 2em;
  }
</style>

<div
  class="page"
  in:blur={{ delay: 200, duration: 300 }}
  out:blur={{ delay: 0, duration: 200 }}>
  <slot />
</div>
