import React from "react";
import Steps from "../extra/Steps";
import HeaderTitle from "../extra/HeaderTitle";
import CustomInput from "../extra/CustomInput";
import NextButton from "../extra/NextButton";
import CustomSelect from "../extra/CustomSelect";

const StepsMain2 = (props: { gap: string }) => {
  const { gap } = props;
  return (
    <section
      className="w-full h-full flex flex-col justify-start items-center"
      style={{ gap: `${gap}` }}
    >
      <Steps />
      <div className="w-[452px] h-fit p-[24px] flex flex-col">
        <HeaderTitle title="Бүс нутгийн мэдээлэл" textCenter="left" />
        <CustomSelect label="Хот/Аймаг" selects={["bla", "bla", "bls"]} />
        <CustomInput label="Сум/Дүүрэг" question="Сум/Дүүрэг" />
        <CustomInput label="Хороо" question="Хороо" />
        <NextButton />
      </div>
    </section>
  );
};

export default StepsMain2;
