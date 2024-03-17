import React from "react";
import SingleOrderTable from "./SingleOrderTable";
const OrderTableData = [
  { label: "Захиалгын ID дугаар", width: "191px" },
  { label: "Үйлчлүүлэгч", width: "209px" },
  { label: "Огноо", width: "168px" },
  { label: "Цаг", width: "129px" },
  { label: "Төлбөр", width: "137px" },
  { label: "Статус", width: "214px" },
  { label: "Дэлгэрэнгүй", width: "122px" },
];
const OrderTableDatas = [
  {
    id: "#12345678",
    userName: "Zoloo",
    userEmail: "Zoloo@gmail.com",
    orderData: "2023-01-01",
    orderTime: "10:58",
    orderPrice: "12,000₮",
    orderStatus: "arrived",
    img: "./ArrowRight.png",
  },
  {
    id: "#12345678",
    userName: "Zoloo",
    userEmail: "Zoloo@gmail.com",
    orderData: "2023-01-01",
    orderTime: "10:58",
    orderPrice: "12,000₮",
    orderStatus: "arrived",
    img: "./ArrowRight.png",
  },
  {
    id: "#12345678",
    userName: "Zoloo",
    userEmail: "Zoloo@gmail.com",
    orderData: "2023-01-01",
    orderTime: "10:58",
    orderPrice: "12,000₮",
    orderStatus: "arrived",
    img: "./ArrowRight.png",
  },
  {
    id: "#12345678",
    userName: "Zoloo",
    userEmail: "Zoloo@gmail.com",
    orderData: "2023-01-01",
    orderTime: "10:58",
    orderPrice: "12,000₮",
    orderStatus: "arrived",
    img: "./ArrowRight.png",
  },
  {
    id: "#12345678",
    userName: "Zoloo",
    userEmail: "Zoloo@gmail.com",
    orderData: "2023-01-01",
    orderTime: "10:58",
    orderPrice: "12,000₮",
    orderStatus: "arrived",
    img: "./ArrowRight.png",
  },
  {
    id: "#12345678",
    userName: "Zoloo",
    userEmail: "Zoloo@gmail.com",
    orderData: "2023-01-01",
    orderTime: "10:58",
    orderPrice: "12,000₮",
    orderStatus: "arrived",
    img: "./ArrowRight.png",
  },
  {
    id: "#12345678",
    userName: "Zoloo",
    userEmail: "Zoloo@gmail.com",
    orderData: "2023-01-01",
    orderTime: "10:58",
    orderPrice: "12,000₮",
    orderStatus: "arrived",
    img: "./ArrowRight.png",
  },
  {
    id: "#12345678",
    userName: "Zoloo",
    userEmail: "Zoloo@gmail.com",
    orderData: "2023-01-01",
    orderTime: "10:58",
    orderPrice: "12,000₮",
    orderStatus: "arrived",
    img: "./ArrowRight.png",
  },
  {
    id: "#12345678",
    userName: "Zoloo",
    userEmail: "Zoloo@gmail.com",
    orderData: "2023-01-01",
    orderTime: "10:58",
    orderPrice: "12,000₮",
    orderStatus: "arrived",
    img: "./ArrowRight.png",
  },
  {
    id: "#12345678",
    userName: "Zoloo",
    userEmail: "Zoloo@gmail.com",
    orderData: "2023-01-01",
    orderTime: "10:58",
    orderPrice: "12,000₮",
    orderStatus: "arrived",
    img: "./ArrowRight.png",
  },
  {
    id: "#12345678",
    userName: "Zoloo",
    userEmail: "Zoloo@gmail.com",
    orderData: "2023-01-01",
    orderTime: "10:58",
    orderPrice: "12,000₮",
    orderStatus: "arrived",
    img: "./ArrowRight.png",
  },
  {
    id: "#12345678",
    userName: "Zoloo",
    userEmail: "Zoloo@gmail.com",
    orderData: "2023-01-01",
    orderTime: "10:58",
    orderPrice: "12,000₮",
    orderStatus: "arrived",
    img: "./ArrowRight.png",
  },
];
const OrderTable = () => {
  return (
    <div className="w-full h-[616px] bg-white rounded-xl border-[1px] border-[#evecf0]  divide-y">
      <header className="w-full font-sans font-bold text-xl h-fit px-6 py-5">
        Захиалга
      </header>
      <div className="flex w-full h-fit bg-[#F7F7F8] justify-between">
        {OrderTableData.map((data, index) => (
          <span key={index} className="py-[14px] pl-[24px]">
            {data.label}
          </span>
        ))}
      </div>
      <div className="w-full h-full flex flex-col divide-y overflow-y-scroll">
        {OrderTableDatas.map((order, index) => (
          <SingleOrderTable
            key={index}
            id={order.id}
            userName={order.userName}
            userEmail={order.userEmail}
            orderData={order.orderData}
            orderTime={order.orderTime}
            orderPrice={order.orderPrice}
            orderStatus={order.orderStatus}
            img={order.img}
          />
        ))}
      </div>
    </div>
  );
};

export default OrderTable;
