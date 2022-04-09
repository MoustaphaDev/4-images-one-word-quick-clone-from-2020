import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";

const LevelContext = createContext(
  0 as unknown as [number, Dispatch<SetStateAction<number>>]
);

interface LevelProviderProps {
  children: React.ReactNode;
}

const LevelProvider = ({ children }: LevelProviderProps) => {
  const [Level, setLevel] = useState(0);
  return (
    <LevelContext.Provider value={[Level, setLevel]}>
      {children}
    </LevelContext.Provider>
  );
};

export { LevelProvider, LevelContext };
