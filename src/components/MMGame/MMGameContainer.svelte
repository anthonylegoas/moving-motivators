<script>
  import MMGame from "./MMGame.svelte";
  import { gameStore } from "../../stores";
  import { _, locale, locales } from "svelte-i18n";

  const { cards, moveCard, refreshCards, swapCards, swapIsActive } = gameStore;

  locale.subscribe(() => {
    refreshCards();
    $cards.map((card, idx) => (card.img = $_(`game.cards.${idx}.img`)));
  });

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
