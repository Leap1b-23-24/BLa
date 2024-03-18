import HeaderTitle from "@/components/extra/SignUp/HeaderTitle";
import NextButton from "@/components/extra/SignUp/NextButton";
import PineconeFooter from "@/components/extra/SignUp/PineconeFooter";
import PineconeHeader from "@/components/extra/SignUp/PineconeHeader";
import SignUpButton from "@/components/extra/SignUp/SignUpButton";
import Container from "@/components/global/Container";
import CustomInput from "@/components/global/CustomInput";
import React from "react";

const Home = () => {
  return (
    <Container>
      <PineconeHeader />
      <main className="w-[440px] h-fit rounded-xl divide-y border-[1px] border-[#ECEDF0] bg-white p-10 flex flex-col">
        <div className="w-full h-fit flex flex-col gap-4 pb-[28px]">
          <HeaderTitle title="SignUp" textCenter="center" />
          <CustomInput label="Your email" question="Email" />
          <CustomInput label="Your name" question="Name" />
          <button className="btn bg-black text-white">Next</button>
        </div>
        <SignUpButton />
        <div className="flex flex-row justify-center pt-[38px] py-[10px] w-full h-fit">
          Бүртгэлтэй юу?{" "}
          <a href="./" className=" underline">
            Нэвтрэх
          </a>
        </div>
      </main>
      <PineconeFooter />
    </Container>
  );
};

export default Home;
