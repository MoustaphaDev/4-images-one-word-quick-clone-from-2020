import { useEffect } from "react";
import useGuessContext from "./useGuessContext";
import useKeyboardContext from "./useKeyboardContext";
import useLevelContext from "./useLevelContext";
import useSolutionContext from "./useSolutionContext";

function useWatchNextLevel(potentialLetters: string[]) {
  const level = useSolutionContext();
  const [levelNumber, setLevelNumber] = useLevelContext();
  const [, setKeyboardArray] = useKeyboardContext();
  const [guessArray, setGuessArray] = useGuessContext();

  const hasWonLevel = guessArray.every(
    (letter, index) => letter === level.solution[index]
  );

  useEffect(() => {
    if (hasWonLevel) {
      setLevelNumber(levelNumber + 1);
    }
  }, [hasWonLevel]);
  useEffect(() => {
    setKeyboardArray(potentialLetters);
    setGuessArray(Array(level.solution.length).fill(null));
  }, [potentialLetters, level]);
}

export default useWatchNextLevel;
