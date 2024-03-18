import React from "react";
import { FaHeart } from "react-icons/fa";
import { MdShoppingCart } from "react-icons/md";

const MainHeader = () => {
  return (
    <div className="w-full h-fit justify-center flex flex-row bg-[#12A795]">
      <div className="w-[1243px] h-fit flex justify-between flex-row items-center">
        <img src="./whiteLogo.png" alt="Logo" />
        <div className="w-[302px] h-full relative">
          <img
            src="./search.png"
            alt="search"
            className="w-6 h-6 absolute top-[8px] left-[14px]"
          />
          <input
            type="text"
            className="w-[302px] h-fit rounded-[8px] border-[1px] py-[8px] pl-[44px] pr-[8px] border-[#D6D8DB]"
            placeholder="Хайлт"
          />
        </div>
        <div className="w-fit items-center h-fit flex flex-row gap-8">
          <FaHeart color="white" size={30} />
          <MdShoppingCart color="white" size={30} />
          <img
            src="./profile.png"
            alt="Profile"
            className="w-[68.28px] h-[55.86px]"
          />
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
