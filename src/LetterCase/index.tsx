import classNames from "classnames";
import React from "react";

interface LetterCaseProps {
  letter: string | null;
  type: "kb" | "guess";
  onClick: React.MouseEventHandler;
  //   index?: number;
}

const btnType = {
  kb: {
    letterAbsent: "bg-[#ffffff11] !border-b-0 !shadow-none",
    style:
      "h-14 w-14 text-4xl font-black shadow-[0px_3px_1px_0px] border-b-[3px]",
  },
  guess: {
    style:
      "font-black h-10 w-10 text-3xl shadow-[0px_2px_1px_0px] border-b-[2px]",
    letterAbsent: "bg-[#000311] !shadow-letter-case !border-b-0",
  },
};

const LetterCase = ({ letter, type, onClick }: LetterCaseProps) => {
  return (
    <div
      onClick={onClick}
      className={classNames(
        letter
          ? "cursor-pointer border-solid border-b-gray-500 bg-gradient-to-b from-white  to-grayish-blue shadow-black"
          : btnType[type].letterAbsent,
        "flex items-center justify-center rounded-md uppercase text-black",
        btnType[type].style
      )}
    >
      {letter ?? ""}
    </div>
  );
};

export default LetterCase;
