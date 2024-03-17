import React from "react";

const OrderDetailSingleProduct = () => {
  return (
    <div className="bg-[#F7F7F8] rounded-xl w-full h-[156px] overflow-hidden flex flex-row gap-6">
      <img src="./product_card.png" alt="Card" className="h-full" />
      <main className="py-4 px-6 w-full flex flex-col justify-between h-full">
        <div className="w-full h-fit flex flex-col gap-2">
          <h2 className="font-[700] text-2xl font-sans">
            WOMEN'S HORSEBIT MULE
          </h2>
          <span className="w-full h-fit flex font-normal text-[#3F4145] text-[14px] flex-col">
            <p>2024-01-20</p>
            <p>Бүтээгдэхүүний ID: 30349049903</p>
          </span>
        </div>
        <div className="w-full h-fit flex flex-row justify-between">
          <span className="flex flex-row text-[14px] font-normal">
            <p>Тоо ширхэг: 1</p>* ₮125,700
          </span>
          <p className="text-[18px] font-bold text-[#121316]">₮125,700</p>
        </div>
      </main>
    </div>
  );
};

export default OrderDetailSingleProduct;
