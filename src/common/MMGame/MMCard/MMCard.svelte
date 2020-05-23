<script>
  import { Draggable } from "../../../cdk";

  export let id;
  export let img;
  export let name;
</script>

<style>
  img.moving-motivator-card {
    width: 270px;
    height: 270px;
    box-shadow: var(--game-shadow);
    border-radius: 4px;
    cursor: move;
  }
</style>

<Draggable on:dragstart>
  <img alt={name} class="moving-motivator-card" {id} src={img} />
</Draggable>
