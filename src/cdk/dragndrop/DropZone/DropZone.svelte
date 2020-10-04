<style>
  .drop_zone {
    width: auto;
    height: auto;
    margin: 10px;
  }
</style>

<div
  class="drop_zone"
  id={$$props.id}
  on:dragenter
  on:dragleave
  on:drop
  ondragover="return false">
  <slot />
</div>
