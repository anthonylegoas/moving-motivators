import { writable } from "svelte/store";
import { useMMCards } from "../api";

function swap(array, from, to) {
  [array[from], array[to]] = [array[to], array[from]];
  return array;
}

function move(array, from, to) {
  array.splice(to, 0, array.splice(from, 1)[0]);
  return array;
}

function createGameStore() {
  const { subscribe: subscribeCards, update: updateCards } = writable(
    useMMCards()
  );
  const { subscribe: subscribeSwip, update: updateSwap } = writable(false);

  return {
    cards: {
      subscribe: subscribeCards,
    },
    swapIsActive: {
      subscribe: subscribeSwip,
    },
    moveCard: (from, to) => updateCards((cards) => move(cards, from, to)),
    swapCards: (from, to) => updateCards((cards) => swap(cards, from, to)),
    toggleSwap: () => updateSwap((value) => !value),
  };
}

const gameStore = createGameStore();

export { gameStore };
