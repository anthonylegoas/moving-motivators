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
    box-shadow: 2px 2px 15px #999;
    cursor: move;
  }
</style>

<Draggable on:dragstart>
  <img alt={name} class="moving-motivator-card" {id} src={img} />
</Draggable>
