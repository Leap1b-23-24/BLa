import React from "react";

const SingleCard = (props: {
  img: string;
  header: string;
  category: string;
  price: string;
}) => {
  const { img, header, category, price } = props;
  return (
    <div className="w-full h-fit bg-white rounded-xl overflow-hidden flex flex-col">
      <img src={`${img}`} alt="Card" className="w-full h-[244px]" />
      <div className="w-full h-fit flex flex-col gap-6 p-6 pt-0">
        <span className="w-full h-fit flex flex-col gap-3">
          <h1>{header}</h1>
          <p>{category}</p>
        </span>
        <p>{price}</p>
      </div>
    </div>
  );
};

export default SingleCard;
