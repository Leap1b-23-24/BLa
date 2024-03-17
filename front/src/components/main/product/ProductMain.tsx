import ProductFilter from "@/components/extra/product/ProductFilter";
import ProductTable from "@/components/extra/product/ProductTable";
import ProductTabs from "@/components/extra/product/ProductTabs";
import React from "react";

const ProductMain = () => {
  return (
    <section className="w-full h-full flex flex-col">
      <ProductTabs />
      <div className="flex flex-col w-full h-full gap-6 px-6 py-[34px]">
        <ProductFilter />
        <ProductTable />
      </div>
    </section>
  );
};

export default ProductMain;
