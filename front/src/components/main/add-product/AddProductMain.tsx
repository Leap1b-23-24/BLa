import AddProductButton from "@/components/extra/add-product/AddProductButton";
import AddProductTab from "@/components/extra/add-product/AddProductTab";
import Section1 from "@/components/extra/add-product/Section1";
import Section2 from "@/components/extra/add-product/Section2";
import Section3 from "@/components/extra/add-product/Section3";
import Section4 from "@/components/extra/add-product/Section4";
import Section5 from "@/components/extra/add-product/Section5";
import Section6 from "@/components/extra/add-product/Section6";
import React from "react";

const AddProductMain = () => {
  return (
    <section className="w-full h-full flex flex-col">
      <AddProductTab />
      <div className="flex flex-row w-full h-full gap-6 px-6 py-[34px]">
        <div className="flex flex-col gap-6 w-full h-fit">
          <Section1 />
          <Section2 />
          <Section3 />
        </div>
        <div className="w-full h-fit flex flex-col gap-6">
          <Section4 />
          <Section5 />
          <Section6 />
          <AddProductButton />
        </div>
      </div>
    </section>
  );
};

export default AddProductMain;
