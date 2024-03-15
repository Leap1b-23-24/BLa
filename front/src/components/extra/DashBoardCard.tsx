import React from "react";

const DashBoardCard = (props: {
  img: string;
  labelTop: string;
  number: string;
  labelBottom: string;
}) => {
  const { img, labelTop, number, labelBottom } = props;
  return (
    <div className="w-full h-fit flex flex-col gap-[16px] py-[16px] px-[24px] bg-white rounded-xl">
      <span className="w-full h-fit flex flex-row gap-[8px] items-center">
        <img
          src={`${img}`}
          alt="logo"
          className="w-5 h-5 flex flex-row gap-[8px]"
        />
        <p>{labelTop}</p>
      </span>
      <p>{number}</p>
      <p>{labelBottom}</p>
    </div>
  );
};

export default DashBoardCard;
