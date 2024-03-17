import React from "react";
import Steps from "../../extra/SignUp/Steps";
import HeaderTitle from "../../extra/SignUp/HeaderTitle";
import CustomInput from "../../extra/SignUp/CustomInput";
import NextButton from "../../extra/SignUp/NextButton";
import CustomSelect from "../../extra/SignUp/CustomSelect";

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
