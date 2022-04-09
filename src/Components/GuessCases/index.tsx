import useGuessContext from "../../Hooks/useGuessContext";
import useKeyboardContext from "../../Hooks/useKeyboardContext";
import LetterCase from "../../LetterCase";

const GuessCases = () => {
  const [keyboardArray, setKeyboardArray] = useKeyboardContext();
  const [guessArray, setGuessArray] = useGuessContext();
  function handleClick(index: number) {
    return () => {
      // Remove letter from guess cases
      const guessArrayCopy = [...guessArray];
      let removedLetter = guessArrayCopy[index];
      guessArrayCopy[index] = null;
      setGuessArray(guessArrayCopy);

      // Add letter to keyboard array
      let hasAddedLetter = false;
      const newKeyboardArray = keyboardArray.map((letter) => {
        if (!letter && !hasAddedLetter) {
          hasAddedLetter = true;
          return removedLetter;
        }
        return letter;
      });
      setKeyboardArray(newKeyboardArray);
    };
  }
  return (
    <div className="mx-auto mt-8 flex w-fit justify-between gap-1">
      {Array(guessArray.length)
        .fill(null)
        .map((_, index) => {
          const letter = guessArray[index];
          return (
            <LetterCase
              letter={letter}
              key={index}
              // index={index}
              type="guess"
              onClick={handleClick(index)}
            />
          );
        })}
    </div>
  );
};

export default GuessCases;
