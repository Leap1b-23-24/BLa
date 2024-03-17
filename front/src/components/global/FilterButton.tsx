import React from "react";

const FilterButton = () => {
  return (
    <div className="w-full h-fit flex flex-row justify-between">
      <div className="w-fit h-fit flex flex-row gap-2">
        <button className="btn bg-[#18BA51] text-white">Өнөөдөр</button>
        <button className="btn bg-white border-[#ecedf0] border-[1px]">
          7 хоног
        </button>
        <select className="select bg-white border-[#ecedf0] border-[1px] font-sans font-[600] text-[14px] w-[132px]">
          <option disabled selected>
            Сараар
          </option>
          <option>Homer</option>
          <option>Marge</option>
          <option>Bart</option>
          <option>Lisa</option>
          <option>Maggie</option>
        </select>
      </div>
      <div className="w-[302px] h-full relative">
        <img
          src="./search.png"
          alt="search"
          className="w-6 h-6 absolute top-[8px] left-[14px]"
        />
        <input
          type="text"
          className="w-[302px] h-fit rounded-[8px] border-[1px] py-[8px] pl-[44px] pr-[8px] border-[#D6D8DB]"
          placeholder="Дугаар, Имэйл"
        />
      </div>
    </div>
  );
};

export default FilterButton;
