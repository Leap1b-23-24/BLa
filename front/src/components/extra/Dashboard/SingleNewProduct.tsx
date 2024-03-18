import React from "react";

const SingleNewProduct = (props: {
  OrderNumber: number;
  img: string;
  title: string;
  id: string;
  soldNumber: string;
  Price: string;
}) => {
  const { OrderNumber, img, title, id, soldNumber, Price } = props;
  return (
    <div className="w-full h-fit py-4 flex flex-row items-center">
      <span
        className="h-fit flex flex-row justify-center"
        style={{ width: `${5700 / 533}%` }}
      >
        {OrderNumber}
      </span>
      <div
        className="justify-center items-center h-fit flex flex-row gap-3"
        style={{ width: `${22500 / 533}%` }}
      >
        <img src={img} alt="img" className="w-10 h-10  rounded-full" />
        <div className="flex w-fit flex-col h-full justify-between">
          <div className="overflow-x-hidden flex  h-fit text-nowrap w-[157px]">
            <p>{title}</p>
          </div>
          <p>{id}</p>
        </div>
      </div>
      <div
        className="flex w-[125.5px] items-center h-full justify-center"
        style={{ width: `${12500 / 533}%` }}
      >
        {soldNumber}
      </div>
      <div
        className="flex w-[125.5px] items-center h-full justify-center"
        style={{ width: `${12500 / 533}%` }}
      >
        {Price}
      </div>
    </div>
  );
};

export default SingleNewProduct;
