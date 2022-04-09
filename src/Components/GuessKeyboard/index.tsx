import { useEffect } from "react";
import useGuessContext from "../../Hooks/useGuessContext";
import useKeyboardContext from "../../Hooks/useKeyboardContext";
import useWatchNextLevel from "../../Hooks/useNextLevel";
import LetterCase from "../../LetterCase";

const GuessKeyboard = () => {
  const [guessArray, setGuessArray, emptyGuessArray] = useGuessContext();
  const [keyboardArray, setKeyboardArray, potentialLetters] =
    useKeyboardContext();

  useWatchNextLevel(potentialLetters);

  function handleResetGuess() {
    setGuessArray(emptyGuessArray);
    setKeyboardArray(potentialLetters);
  }

  function handleAddGuessLetter(newLetterIndex: number) {
    return () => {
      // Add letter to guess array
      let hasAddedLetter = false;
      const isGuessArrayFull = guessArray.every((letter) => letter !== null);
      if (!isGuessArrayFull) {
        const newGuessArray = guessArray.map((letter) => {
          if (!letter && !hasAddedLetter) {
            hasAddedLetter = true;
            return keyboardArray[newLetterIndex];
          }
          return letter;
        });
        setGuessArray(newGuessArray);
        // remove letter to keyboard array
        const newKeyboardArray = keyboardArray.map((letter, index) => {
          if (index === newLetterIndex) {
            return null;
          }
          return letter;
        });
        setKeyboardArray(newKeyboardArray);
      }
    };
  }
  return (
    <div className="grid h-fit grid-cols-[85%_1fr] gap-2">
      <div className="mx-auto grid w-fit grid-cols-6 grid-rows-2 gap-2">
        {keyboardArray.map((letter, index) => {
          return (
            <LetterCase
              letter={letter}
              key={index}
              type="kb"
              onClick={handleAddGuessLetter(index)}
            />
          );
        })}
      </div>
      <div
        className="box-content flex h-full w-14 cursor-pointer items-center justify-center rounded-md border-b-[3px] border-solid border-b-[#3C7000] bg-gradient-to-b from-[#8DE21B] to-[#55AF00]"
        onClick={handleResetGuess}
      >
        <img
          src="/images/icon-delete.svg"
          alt="delete"
          className="scale-125 invert-[100%]"
        />
      </div>
    </div>
  );
};

export default GuessKeyboard;
