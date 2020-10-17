<script>
  import MMGame from "./MMGame.svelte";
  import { gameStore } from "../../stores";

  const { cards, moveCard, swapCards, swapIsActive } = gameStore;

  function handleDrop(e) {
    const droppedCardId = e.dataTransfer.getData("text");
    const newDropZoneIndex = e.currentTarget.id.split("_")[1];
    const oldDropZoneIndex = $cards.findIndex(card => card.id == droppedCardId);
    $swapIsActive
      ? swapCards(oldDropZoneIndex, newDropZoneIndex)
      : moveCard(oldDropZoneIndex, newDropZoneIndex);
  }
</script>

<MMGame cards={$cards} on:drop={handleDrop} />
