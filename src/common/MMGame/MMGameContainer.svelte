<script>
  import MMGame from "./MMGame.svelte";
  import { useMMCards } from "../../api";

  let cards = useMMCards();

  function swap(array, from, to) {
    [array[from], array[to]] = [array[to], array[from]];
    return array;
  }

  function handleDragDrop(e) {
    const droppedCardId = e.dataTransfer.getData("text");
    const newDropZoneIndex = e.currentTarget.id.split("_")[1];
    const oldDropZoneIndex = cards.findIndex(card => card.id == droppedCardId);
    cards = swap(cards, oldDropZoneIndex, newDropZoneIndex);
  }
</script>

<MMGame {cards} on:drop={handleDragDrop} />
