import React from "react";
import CustomInput from "../../global/CustomInput";

const Section1 = () => {
  return (
    <div className="w-full h-[301px] flex flex-col bg-white rounded-xl gap-4 p-6">
      <CustomInput label="Бүтээгдэхүүний нэр" question="Нэр" />
      <CustomInput
        label="Нэмэлт мэдээлэл"
        question="Гол онцлог, давуу тал, техникийн үзүүлэлтүүдийг онцолсон дэлгэрэнгүй, сонирхолтой тайлбар."
      />
      <CustomInput label="Барааны код" question="#1234567" />
    </div>
  );
};

export default Section1;
