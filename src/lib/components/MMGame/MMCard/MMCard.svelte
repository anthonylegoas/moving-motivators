<script>
  import { Draggable } from "../../../cdk";
  import { gameStore } from "../../../stores";

  export let id;
  export let img;
  export let name;

  const { zoom } = gameStore;
  const maxCardSize = 450;
  let cardSize = maxCardSize / 2;
  zoom.subscribe((value) => (cardSize = maxCardSize * value));
</script>

<Draggable on:dragstart>
  <img
    alt={name}
    class="moving-motivator-card"
    {id}
    src={img}
    style={`width: ${cardSize}px; height: ${cardSize}px;`}
  />
</Draggable>

<style>
  img.moving-motivator-card {
    box-shadow: var(--game-shadow);
    border-radius: 4px;
    cursor: move;
  }
</style>
