<script>
  import ZoomOut from "./ZoomOut.svelte";
  import { gameStore } from "../../../../stores";

  const { zoom, zoomOut, zoomMin } = gameStore;
  let disabled = true;

  zoom.subscribe(value => (disabled = value <= zoomMin));
</script>

<ZoomOut {disabled} on:click={() => zoomOut()} />
