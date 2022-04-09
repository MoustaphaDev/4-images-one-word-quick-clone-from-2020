import { useContext } from "react";
import { KeyboardContext } from "../Context/KeyBoardContext";

const useKeyboardContext = () => useContext(KeyboardContext);
export default useKeyboardContext;
