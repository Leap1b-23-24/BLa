import React from "react";
import Steps from "../extra/Steps";
import HeaderTitle from "../extra/HeaderTitle";
import CustomInput from "../extra/CustomInput";
import NextButton from "../extra/NextButton";

const StepsMain = (props: { gap: string }) => {
  const { gap } = props;
  return (
    <section
      className="w-full h-full flex flex-col justify-start items-center"
      style={{ gap: `${gap}` }}
    >
      <Steps />
      <div className="w-[452px] h-fit p-[24px] flex flex-col">
        <HeaderTitle title="Дэлгүүрийн мэдээлэл" textCenter="left" />
        <CustomInput
          label="Танай дэлгүүрийн нэр юу вэ?"
          question="Дэлгүүрийн нэр"
        />
        <NextButton />
      </div>
    </section>
  );
};

export default StepsMain;
