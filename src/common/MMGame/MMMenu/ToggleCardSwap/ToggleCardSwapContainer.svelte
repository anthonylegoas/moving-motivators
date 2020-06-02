<script>
  import ToggleCardSwap from "./ToggleCardSwap.svelte";
  import { gameStore } from "../../../../stores";

  const { swapIsActive, toggleSwap } = gameStore;
</script>

<ToggleCardSwap swapIsActive={$swapIsActive} on:click={() => toggleSwap()} />
