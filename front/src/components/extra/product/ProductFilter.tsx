import React from "react";
import ProductFilterButton from "./ProductFilterButton";

const ProductFilter = () => {
  return (
    <div className="w-full h-fit flex flex-col gap-6">
      <button className="btn text-white bg-[#121316] w-[280px] flex h-12">
        <img src="./sum.png" alt="Sum" className="w-6 h-6" />
        Бүтээгдэхүүн нэмэх
      </button>
      <ProductFilterButton />
    </div>
  );
};

export default ProductFilter;
