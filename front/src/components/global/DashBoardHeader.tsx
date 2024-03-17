import React from "react";
import { IoIosNotifications } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";

const DashBoardHeader = () => {
  return (
    <section className="bg-[#121316] flex flex-row justify-between w-full h-fit py-[12px] px-[24px]">
      <img src="./PineconeSolo.png" alt="" />
      <div className="w-fit h-fit items-center flex flex-row gap-[16px]">
        <IoIosNotifications color="white" size={20} />
        <div className="w-fit h-fit flex text-white flex-row gap-[8px] text items-center">
          <FaRegUser color="white" size={20} />
          <p>Username</p>
        </div>
      </div>
    </section>
  );
};

export default DashBoardHeader;
