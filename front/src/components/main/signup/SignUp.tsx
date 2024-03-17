import React from "react";
import HeaderTitle from "../../extra/SignUp/HeaderTitle";
import CustomInput from "../../global/CustomInput";
import CustomButton from "../../extra/SignUp/CustomButton";
import SignUpButton from "../../extra/SignUp/SignUpButton";

const SignUp = () => {
  return (
    <section className="flex flex-col h-fit gap-[16px] w-[440px] p-[40px] bg-white rounded-[16px] border-[1px] border-[#ECEDF0]">
      <HeaderTitle title={"Бүртгүүлэх"} textCenter={"center"} />
      <CustomInput label={"Таны имэйл "} question={"Имэйл"} />
      <CustomInput label={"Таны нэр"} question={"Нэр"} />
      <CustomButton />
      <div className="w-full h-fit flex flex-col divide-y">
        <div className="w-full h-[12px]"></div>
        <div className="w-full h-[12px]"></div>
      </div>
      <SignUpButton />
      <div className="w-full h-fit flex flex-col divide-y">
        <div className="w-full h-[12px]"></div>
        <div className="w-full h-[12px]"></div>
      </div>
      <div className="w-full h-fit py-[10px] flex justify-center">
        <span>
          Бүртгэлтэй юу?
          <a href="./" className="underline decoration-2">
            Нэвтрэх
          </a>
        </span>
      </div>
    </section>
  );
};

export default SignUp;
