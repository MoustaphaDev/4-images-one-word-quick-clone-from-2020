import classNames from "classnames";

interface LetterCasesProps {
  solutionLength: number;
  letters: string[];
}

const LetterCases = ({ solutionLength, letters }: LetterCasesProps) => {
  return (
    <div className="mx-auto mt-8 flex w-fit justify-between gap-1">
      {Array(solutionLength)
        .fill(null)
        .map((_, index) => {
          const letter = letters[index];
          return (
            <div
              key={index}
              className={classNames(
                letter ? "bg-white" : "bg-[#000311]",
                "flex h-10 w-10 items-center justify-center rounded-md text-2xl font-semibold uppercase text-black shadow-letter-case"
              )}
            >
              {letter ?? ""}
            </div>
          );
        })}
    </div>
  );
};

export default LetterCases;
