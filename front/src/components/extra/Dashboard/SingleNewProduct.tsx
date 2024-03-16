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
      <span className="w-[57px] h-fit flex flex-row justify-center">
        {OrderNumber}
      </span>
      <div className="w-[225px] justify-center items-center h-fit flex flex-row gap-3">
        <img src={img} alt="img" className="w-10 h-10  rounded-full" />
        <div className="flex w-full flex-col h-full justify-between">
          <div className="overflow-x-hidden flex  h-fit text-nowrap w-[157px]">
            <p>{title}</p>
          </div>
          <p>{id}</p>
        </div>
      </div>
      <div className="flex w-[125.5px] items-center h-full justify-center">
        {soldNumber}
      </div>
      <div className="flex w-[125.5px] items-center h-full justify-center">
        {Price}
      </div>
    </div>
  );
};

export default SingleNewProduct;
