import React from "react";

const SingleOrderTable = (props: {
  id: string;
  userName: string;
  userEmail: string;
  orderData: string;
  orderTime: string;
  orderPrice: string;
  orderStatus: string;
  img: string;
}) => {
  const {
    id,
    userName,
    userEmail,
    orderData,
    orderTime,
    orderPrice,
    orderStatus,
    img,
  } = props;
  return (
    <div className="w-full h-fit flex flex-row items-center justify-between py-4">
      <div>{id}</div>
      <div className="flex flex-col w-fit h-fit">
        <p>{userName}</p>
        <p>{userEmail}</p>
      </div>
      <div>{orderData}</div>
      <div>{orderTime}</div>
      <div>{orderPrice}</div>
      <div>{orderStatus}</div>
      <div>
        <img src={`${img}`} alt="" />
      </div>
    </div>
  );
};

export default SingleOrderTable;
