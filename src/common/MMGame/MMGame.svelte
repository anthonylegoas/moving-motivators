<script>
  import MMCard from "./MMCard";
  import MMMenu from "./MMMenu";
  import { DropZone } from "../../cdk";
  import { flip } from "svelte/animate";

  export let cards;
</script>

<style>
  .MMGame {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    height: 100%;
    padding: 0 2rem;
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
<MMMenu />
