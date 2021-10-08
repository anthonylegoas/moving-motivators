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
  .MMSessionTitle {
    background-color:rgba(0, 0, 0, 0);
    border: none;
    outline: none;
    margin: 2rem 5rem;
    width: auto;
    color: var(--primary-color);
    font-size: xx-large;
    font-weight: bold;
  }
  .MMSessionTitle:focus {
    background-color:rgba(0, 0, 0, 0);
    border: none;
    outline: none;
    margin: 2rem 5rem;
    width: auto;
    color: var(--primary-color);
    font-size: xx-large;
    font-weight: bold;
  }
  .MMSessionTitle::placeholder {
    color: var(--primary-color);
    text-decoration: dashed underline;
  }
  .MMSessionTitle:focus::placeholder {
    opacity: 0.4;
  }
</style>

<input class="MMSessionTitle" placeholder="CLICK TO ADD YOUR SESSION TITLE"/>
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
