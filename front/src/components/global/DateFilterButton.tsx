import React from "react";

const DateFilterButton = () => {
  return (
    <div className="w-fit h-fit flex flex-row">
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
    </div>
  );
};

export default DateFilterButton;
