import useSolutionContext from "../../Hooks/useSolutionContext";

const ImageGuess = () => {
  const level = useSolutionContext();
  return (
    <div className="mx-auto w-full">
      <img src={level.image} className="mx-auto w-full object-cover" />
    </div>
  );
};

export default ImageGuess;
