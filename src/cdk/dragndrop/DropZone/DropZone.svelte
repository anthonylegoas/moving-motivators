<style>
  .drop_zone {
    width: 270px;
    height: 270px;
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
