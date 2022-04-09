import React, { createContext, Dispatch, SetStateAction } from "react";
import { LevelsType } from "../../Constants/Levels";

const SolutionContext = createContext({} as LevelsType[0]);

interface SolutionProviderProps {
  children: React.ReactNode;
  level: LevelsType[0];
}

const SolutionProvider = ({ children, level }: SolutionProviderProps) => {
  return (
    <SolutionContext.Provider value={level}>
      {children}
    </SolutionContext.Provider>
  );
};

export { SolutionProvider, SolutionContext };
