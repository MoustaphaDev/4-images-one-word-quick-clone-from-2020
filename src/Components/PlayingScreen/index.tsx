import GuessKeyboard from "../GuessKeyboard";
import ImageGuess from "../ImageGuess";
import LetterCases from "../LetterCases";

const PlayingScreen = () => {
  return (
    <div className="h-full w-full bg-[url('/images/ui-example.jpg')] bg-repeat">
      <div className="mx-auto w-11/12 space-y-16 pb-10 pt-20">
        <ImageGuess image="/public/solutions/chauffage.jpg" alt="picsum" />
        <LetterCases solutionLength={6} letters={[]} />
        <GuessKeyboard
          potentialLetters={[
            "a",
            "b",
            "c",
            "d",
            "e",
            "a",
            "b",
            "c",
            "d",
            "e",
            "a",
            "b",
            "c",
          ]}
        />
      </div>
    </div>
  );
};

export default PlayingScreen;
