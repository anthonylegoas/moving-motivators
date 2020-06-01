<script>
  import MMGame from "./MMGame.svelte";
  import { gameStore } from "../../stores";

  const { cards, swapCards } = gameStore;

  function handleDrop(e) {
    const droppedCardId = e.dataTransfer.getData("text");
    const newDropZoneIndex = e.currentTarget.id.split("_")[1];
    const oldDropZoneIndex = $cards.findIndex(card => card.id == droppedCardId);
    swapCards(oldDropZoneIndex, newDropZoneIndex);
  }
</script>

<MMGame cards={$cards} on:drop={handleDrop} />
