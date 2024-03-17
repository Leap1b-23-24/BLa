import React from "react";

const SingleIncomeTable = (props: {
  id: string;
  userEmail: string;
  phoneNumber: string;
  price: string;
  date: string;
}) => {
  const { id, userEmail, phoneNumber, price, date } = props;
  return (
    <div className="w-full h-fit flex flex-row items-center">
      <div className="py-[14px] px-[24px] h-fit" style={{ width: "23.3425%" }}>
        {id}
      </div>
      <div
        className="py-[14px] px-[24px] flex flex-col gap-1 h-fit"
        style={{ width: "37.0165%" }}
      >
        <p>{userEmail}</p>
        <p>{phoneNumber}</p>
      </div>
      <div className="py-[14px] px-[24px] h-fit" style={{ width: "18.9226%" }}>
        {price}
      </div>
      <div className="py-[14px] px-[24px] h-fit" style={{ width: "20.7182%" }}>
        {date}
      </div>
    </div>
  );
};

export default SingleIncomeTable;
