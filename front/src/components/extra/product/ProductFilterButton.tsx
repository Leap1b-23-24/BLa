import React from "react";

const ProductFilterButton = () => {
  return (
    <div className="w-full h-fit flex flex-row items-center justify-between">
      <div className="w-fit h-fit flex flex-row gap-2">
        <select className="select bg-white border-[#ecedf0] border-[1px] font-sans font-[600] text-[14px] ">
          <option disabled selected>
            <img src="./category.png" alt="Category" />
            <p>Ангилал</p>
          </option>
          <option>Homer</option>
          <option>Marge</option>
          <option>Bart</option>
          <option>Lisa</option>
          <option>Maggie</option>
        </select>
        <select className="select bg-white border-[#ecedf0] border-[1px] font-sans font-[600] text-[14px] ">
          <option disabled selected>
            Үнэ
          </option>
          <option>Homer</option>
          <option>Marge</option>
          <option>Bart</option>
          <option>Lisa</option>
          <option>Maggie</option>
        </select>
        <select className="select bg-white border-[#ecedf0] border-[1px] font-sans font-[600] text-[14px] ">
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
      <div className="w-[420px] h-full relative">
        <img
          src="./search.png"
          alt="search"
          className="w-6 h-6 absolute top-[8px] left-[14px]"
        />
        <input
          type="text"
          className="w-full h-fit rounded-[8px] border-[1px] py-[8px] pl-[44px] pr-[8px] border-[#D6D8DB]"
          placeholder="Бүтээгдэхүүний нэр, SKU, UPC"
        />
      </div>
    </div>
  );
};

export default ProductFilterButton;
