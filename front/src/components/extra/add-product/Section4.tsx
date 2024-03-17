import CustomInput from "@/components/global/CustomInput";
import React from "react";

const Section4 = () => {
  return (
    <div className="w-full flex flex-col bg-white rounded-xl p-6 gap-4">
      <CustomInput label="Ерөнхий ангилал" question="Сонгох" />
      <CustomInput label="Дэд ангилал" question="Сонгох" />
    </div>
  );
};

export default Section4;
