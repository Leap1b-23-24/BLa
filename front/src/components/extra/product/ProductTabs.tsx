import React from "react";

const ProductTabsData = ["Бүтээгдэхүүн", "Ангилал"];

const ProductTabs = () => {
  return (
    <div className="w-full h-fit flex flex-row border-[#ECEDF0] border-b-[1px]">
      {ProductTabsData.map((order, index) => (
        <span key={index} className="px-4 cursor-pointer py-4">
          {order}
        </span>
      ))}
    </div>
  );
};

export default ProductTabs;
