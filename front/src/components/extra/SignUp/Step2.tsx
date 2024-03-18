import Container from "@/components/global/Container";
import React from "react";
import PineconeHeader from "./PineconeHeader";
import Steps from "./Steps";
import HeaderTitle from "./HeaderTitle";
import CustomInput from "@/components/global/CustomInput";
import NextButton from "./NextButton";
import PineconeFooter from "./PineconeFooter";
import CustomSelect from "./CustomSelect";

const Step2 = () => {
  return (
    <Container>
      <PineconeHeader />
      <Steps step={2}/>
      <main className="w-[452px] p-6 rounded-xl gap-4 bg-white h-fit flex flex-col">
        <HeaderTitle title="Бүс нутгийн мэдээлэл" textCenter="left" />
        <CustomSelect label="Хот/Аймаг" selects={["", "", "", ""]} />
        <CustomInput label="Сум/Дүүрэг" question="Сум/Дүүрэг" />
        <CustomInput label="Хороо" question="Хороо" />
        <NextButton />
      </main>
      <PineconeFooter />
    </Container>
  );
};

export default Step2;
