import React from "react";

const OrderSelectsData = [
  "Бүгд",
  "Шинэ захиалага",
  "Бэлтгэгдэж байна",
  "Хүргэлтэнд гарсан",
  "Хүргэгдсэн",
  "Цуцлагдсан",
];

const OrderSelects = () => {
  return (
    <div className="w-full h-fit flex flex-row border-[#ECEDF0] border-b-[1px]">
      {OrderSelectsData.map((order, index) => (
        <span key={index} className="px-4 cursor-pointer py-4">
          {order}
        </span>
      ))}
    </div>
  );
};

export default OrderSelects;
