import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";

const KeyboardContext = createContext(
  [] as unknown as [
    (string | null)[],
    Dispatch<SetStateAction<(string | null)[]>>,
    string[]
  ]
);

interface KeyboardProviderProps {
  children: React.ReactNode;
  potentialLetters: string[];
}

const KeyboardProvider = ({
  children,
  potentialLetters,
}: KeyboardProviderProps) => {
  const [keyboardArray, setKeyboardArray] = useState(
    potentialLetters as (string | null)[]
  );

  return (
    <KeyboardContext.Provider
      value={[keyboardArray, setKeyboardArray, potentialLetters]}
    >
      {children}
    </KeyboardContext.Provider>
  );
};

export { KeyboardProvider, KeyboardContext };
