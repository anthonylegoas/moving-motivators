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
  const { subscribe: subscribeZoom, update: updateZoom } = writable(0.5);
  const zoomMin = 0.4;
  const zoomMax = 0.8;

  return {
    cards: {
      subscribe: subscribeCards,
    },
    swapIsActive: {
      subscribe: subscribeSwip,
    },
    zoom: {
      subscribe: subscribeZoom,
    },
    moveCard: (from, to) => updateCards((cards) => move(cards, from, to)),
    swapCards: (from, to) => updateCards((cards) => swap(cards, from, to)),
    toggleSwap: () => updateSwap((value) => !value),
    zoomIn: () =>
      updateZoom((zoom) => (zoom >= zoomMax ? zoomMax : (zoom += 0.1))),
    zoomOut: () =>
      updateZoom((zoom) => (zoom <= zoomMin ? zoomMin : (zoom -= 0.1))),
    zoomMin,
    zoomMax,
  };
}

const gameStore = createGameStore();

export { gameStore };
