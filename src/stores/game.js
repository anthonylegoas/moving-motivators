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
  const { subscribe, update } = writable(useMMCards());

  return {
    cards: {
      subscribe,
    },
    moveCard: (from, to) => update((cards) => move(cards, from, to)),
    swapCards: (from, to) => update((cards) => swap(cards, from, to)),
  };
}

const gameStore = createGameStore();

export { gameStore };
