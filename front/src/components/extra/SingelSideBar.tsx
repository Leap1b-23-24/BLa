import React from "react";

const SingelSideBar = (props: { img: string; label: string }) => {
  const { img, label } = props;
  return (
    <div className="w-full flex items-center h-fit py-[8px] gap-[16px] px-[16px]">
      <img src={`${img}`} alt="logo" />
      <p>{label}</p>
    </div>
  );
};

export default SingelSideBar;
