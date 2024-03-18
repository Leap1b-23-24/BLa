import Container from "@/components/global/Container";
import React from "react";
import PineconeHeader from "./PineconeHeader";
import Steps from "./Steps";
import HeaderTitle from "./HeaderTitle";
import CustomInput from "@/components/global/CustomInput";
import NextButton from "./NextButton";
import PineconeFooter from "./PineconeFooter";
import CustomSelect from "./CustomSelect";

const Step3 = () => {
  return (
    <Container>
      <PineconeHeader />
      <Steps step={3} />
      <main className="w-[452px] p-6 rounded-xl gap-4 bg-white h-fit flex flex-col">
        <HeaderTitle title="Бүс нутгийн мэдээлэл" textCenter="left" />
        <div className="w-full h-fit flex pb-8">
          <p>Энэ мэдээллийг дэлгүүрийн тохиргоонд туслах зорилгоор ашиглана.</p>
        </div>
        <CustomSelect label="Хот/Аймаг" selects={["", "", "", ""]} />
        <CustomSelect label="Хот/Аймаг" selects={["", "", "", ""]} />
        <NextButton />
      </main>
      <PineconeFooter />
    </Container>
  );
};

export default Step3;
