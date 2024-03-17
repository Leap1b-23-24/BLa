import CustomInput from "@/components/global/CustomInput";
import React from "react";

const Section3 = () => {
  return (
    <div className="w-full h-[132px] rounded-xl bg-white p-6 flex flex-row gap-4">
      <CustomInput label="Үндсэн үнэ" question="Үндсэн үнэ" />
      <CustomInput label="Үлдэгдэл тоо ширхэг" question="Үлдэгдэл тоо ширхэг" />
    </div>
  );
};

export default Section3;
