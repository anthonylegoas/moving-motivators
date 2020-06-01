import { writable } from "svelte/store";
import { useMMCards } from "../api";

function swap(array, from, to) {
  [array[from], array[to]] = [array[to], array[from]];
  return array;
}

function createGameStore() {
  const { subscribe, update } = writable(useMMCards());

  return {
    cards: {
      subscribe,
    },
    swapCards: (from, to) => update((cards) => swap(cards, from, to)),
  };
}

const gameStore = createGameStore();

export { gameStore };
