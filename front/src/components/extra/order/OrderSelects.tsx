import React, { useState } from "react";

const OrderSelectsData = [
  "Бүгд",
  "Шинэ захиалага",
  "Бэлтгэгдэж байна",
  "Хүргэлтэнд гарсан",
  "Хүргэгдсэн",
  "Цуцлагдсан",
];

const OrderSelects = () => {
  const [clickedOrder, setClickedOrder] = useState("Бүгд");
  return (
    <div className="w-full h-fit flex flex-row border-[#ECEDF0] border-b-[1px]">
      {OrderSelectsData.map((order, index) => (
        <div
          key={index}
          className="px-4 cursor-pointer py-4 border-b-2 border-black"
          style={{ border: "10px" }}
          onClick={() => {
            setClickedOrder(order);
          }}
        >
          <p>{order}</p>
        </div>
      ))}
    </div>
  );
};

export default OrderSelects;
