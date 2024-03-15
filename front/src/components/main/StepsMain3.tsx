import React from "react";
import Steps from "../extra/Steps";
import HeaderTitle from "../extra/HeaderTitle";
import CustomInput from "../extra/CustomInput";
import NextButton from "../extra/NextButton";
import CustomSelect from "../extra/CustomSelect";

const StepsMain3 = (props: { gap: string }) => {
  const { gap } = props;
  return (
    <section
      className="w-full h-full flex flex-col justify-start items-center"
      style={{ gap: `${gap}` }}
    >
      <Steps />
      <div className="w-[452px] h-fit p-[24px] flex flex-col">
        <HeaderTitle title="Жоохон танилцья" textCenter="left" />
        <div className="w-full h-fit pb-[16px] text-[16px] font-[400] font-sans ">
          <p>Энэ мэдээллийг дэлгүүрийн тохиргоонд туслах зорилгоор ашиглана.</p>
        </div>
        <CustomSelect
          label="Та борлуулалт хийж байсан туршлагатай юу?"
          selects={["bla", "bla", "bls"]}
        />
        <CustomSelect
          label="Та ямар төрлийн бүтээгдэхүүн борлуулах вэ?"
          selects={["bla", "bla", "bls"]}
        />
        <NextButton />
      </div>
    </section>
  );
};

export default StepsMain3;
