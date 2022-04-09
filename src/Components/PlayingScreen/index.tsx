import GuessKeyboard from "../GuessKeyboard";
import ImageGuess from "../ImageGuess";
import GuessCases from "../GuessCases";
import { GuessProvider } from "../../Context/GuessContext";
import { KeyboardProvider } from "../../Context/KeyBoardContext";
import { SolutionProvider } from "../../Context/SolutionContext";
import getRandomKeyboard from "../../Helpers/getRandomKeyboardLetters";
import Levels from "../../Constants/Levels";
import useLevelContext from "../../Hooks/useLevelContext";
import { useMemo } from "react";

const PlayingScreen = () => {
  const [levelNumber] = useLevelContext();
  const level = Levels[levelNumber];
  const randomKb = useMemo(() => getRandomKeyboard(level), [levelNumber]);
  return (
    <SolutionProvider level={level}>
      <GuessProvider>
        <KeyboardProvider potentialLetters={randomKb}>
          <div className="h-full w-full bg-[url('/images/ui-example.jpg')] bg-repeat">
            <div className="mx-auto w-11/12 space-y-16 pb-10 pt-20">
              <ImageGuess />
              <GuessCases />
              <GuessKeyboard />
            </div>
          </div>
        </KeyboardProvider>
      </GuessProvider>
    </SolutionProvider>
  );
};

export default PlayingScreen;
