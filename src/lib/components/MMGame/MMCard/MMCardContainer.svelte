<script>
  import MMCard from "./MMCard.svelte";

  export let id;
  export let img;
  export let name;

  function handleDragStart(e) {
    e.dataTransfer.setData("text", e.target.getAttribute("id"));
  }
</script>

<MMCard on:dragstart={handleDragStart} {id} {img} {name} />
