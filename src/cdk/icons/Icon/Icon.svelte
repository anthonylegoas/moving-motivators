<script>
  import Icons from "./_Icons.svelte";

  export let name;
  export let size = 20;
</script>

<style>
  .icon {
    position: relative;
    overflow: hidden;
    vertical-align: middle;
    -o-object-fit: contain;
    object-fit: contain;
    -webkit-transform-origin: center center;
    transform-origin: center center;
    stroke: currentColor;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
    fill: none;
    margin: 0.25em;
    padding: 0.25em;
  }
</style>

<svg aria-hidden="true" class="icon" width={size} height={size}>
  <Icons />
  <use xlink:href="#{name}" />
</svg>
