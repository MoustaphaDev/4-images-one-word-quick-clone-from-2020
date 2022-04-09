import { LevelsType } from "../Constants/Levels";

function generateRandomLetters(n: number) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const randomIndexes = Array(n)
    .fill(null)
    .map(() => Math.floor(Math.random() * alphabet.length));
  return randomIndexes.map((index) => alphabet[index]);
}

const shuffleLetters = (array: Array<string>) => {
  const arrayCopy = [...array];
  for (let i = arrayCopy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arrayCopy[i], arrayCopy[j]] = [arrayCopy[j], arrayCopy[i]];
  }
  return arrayCopy;
};

function getRandomKeyboard(level: LevelsType[0]) {
  const randomKb = shuffleLetters(
    generateRandomLetters(12 - level.solution.length).concat(level.solution)
  );
  return randomKb;
}

export default getRandomKeyboard;
