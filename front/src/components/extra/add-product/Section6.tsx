import CustomInput from "@/components/global/CustomInput";
import React from "react";

const Section6 = () => {
  return (
    <div className="w-full h-[195px] rounded-xl bg-white p-6 pb-[57px] flex flex-col">
      <CustomInput label="Таг" question="Таг нэмэх....." />
      <p>Санах болгох:Гутал , Цүнх , Эмэгтэй</p>
    </div>
  );
};

export default Section6;
