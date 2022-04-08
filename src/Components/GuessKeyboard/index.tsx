import classNames from "classnames";

interface GuessKeyBoardProps {
  potentialLetters: string[];
}
const kbItemsLength = 12;
const GuessKeyboard = ({ potentialLetters }: GuessKeyBoardProps) => {
  return (
    <div className="center mx-auto grid w-fit grid-cols-6 grid-rows-2 gap-y-2 gap-x-2">
      {Array(12)
        .fill(null)
        .map((_, index) => {
          const letter = potentialLetters[index];
          console.log(letter);
          console.log(index);

          return (
            <div
              key={index}
              className={classNames(
                letter
                  ? "bg-gradient-to-b from-white to-grayish-blue shadow-[0px_2px_1px_0px] shadow-gray-600"
                  : "bg-[#ffffff11]",
                "flex h-14 w-14 items-center justify-center rounded-md text-3xl font-black uppercase text-black"
              )}
            >
              {letter ?? ""}
            </div>
          );
        })}
    </div>
  );
};

export default GuessKeyboard;
