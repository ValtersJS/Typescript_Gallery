import { ArtObject } from "../types";

export const getRandomItems = (array: ArtObject[], count: number) => {
  const randomIndexes: number[] = [];
  while (randomIndexes.length < count) {
    const randomIndex = Math.floor(Math.random() * array.length);
    if (!randomIndexes.includes(randomIndex)) {
      randomIndexes.push(randomIndex);
    }
  }
  return randomIndexes.map((index) => array[index]);
};
