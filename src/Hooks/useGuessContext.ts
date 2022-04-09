import { useContext } from "react";
import { GuessContext } from "../Context/GuessContext";

const useGuessContext = () => useContext(GuessContext);
export default useGuessContext;
