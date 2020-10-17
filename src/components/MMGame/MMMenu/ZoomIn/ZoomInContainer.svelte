<script>
  import ZoomIn from "./ZoomIn.svelte";
  import { gameStore } from "../../../../stores";

  const { zoom, zoomIn, zoomMax } = gameStore;
  let disabled = true;

  zoom.subscribe(value => (disabled = value >= zoomMax));
</script>

<ZoomIn {disabled} on:click={() => zoomIn()} />
