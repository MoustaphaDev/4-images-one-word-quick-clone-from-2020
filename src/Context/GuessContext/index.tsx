import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";
import useSolutionContext from "../../Hooks/useSolutionContext";

const GuessContext = createContext(
  [] as unknown as [
    (string | null)[],
    Dispatch<SetStateAction<(string | null)[]>>,
    any[]
  ]
);

interface GuessProviderProps {
  children: React.ReactNode;
}

const GuessProvider = ({ children }: GuessProviderProps) => {
  const level = useSolutionContext();
  const emptyGuessArray = Array(level.solution.length).fill(null);
  const [guessArray, setGuessArray] = useState(
    emptyGuessArray as (string | null)[]
  );
  return (
    <GuessContext.Provider value={[guessArray, setGuessArray, emptyGuessArray]}>
      {children}
    </GuessContext.Provider>
  );
};

export { GuessProvider, GuessContext };
