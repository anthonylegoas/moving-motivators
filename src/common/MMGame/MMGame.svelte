<script>
  import MMCard from "./MMCard";
  import { DropZone } from "../../cdk";
  import { flip } from "svelte/animate";

  export let cards;
</script>

<style>
  .MMGame {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
</style>

<div class="MMGame">
  {#each cards as { id, img, name }, i (id)}
    <div animate:flip={{ duration: 500 }}>
      <DropZone on:drop id={`dropZone_${i}`}>
        <MMCard {id} {img} {name} />
      </DropZone>
    </div>
  {/each}
</div>
