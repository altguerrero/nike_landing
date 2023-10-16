export const ShoeCard = ({ imgURL, changeBigShoeImage, bigShoeImage }) => {
  const handleClick = () => {
    if (bigShoeImage !== imgURL.bigShoe) changeBigShoeImage(imgURL.bigShoe);
  };

  return (
    <div
      className={`border-2 rounded-xl ${
        bigShoeImage === imgURL.bigShoe
          ? "border-coral-red"
          : "border-transparent"
      } cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center bg-card bg-center bg-cover rounded-xl max-sm:p-4 w-24 h-24 sm:w-40 sm:h-40">
        <img
          src={imgURL.thumbnail}
          alt="show collection"
          width={127}
          height={103.34}
          className="object-contain"
        />
      </div>
    </div>
  );
};
