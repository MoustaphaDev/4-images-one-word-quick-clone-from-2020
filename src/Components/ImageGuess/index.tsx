interface ImageGuessProps {
  image: string;
  alt: string;
}

const ImageGuess = ({ image, alt }: ImageGuessProps) => {
  return (
    <div className="mx-auto w-full">
      <img src={image} alt={alt} className="mx-auto w-full object-cover" />
    </div>
  );
};

export default ImageGuess;
