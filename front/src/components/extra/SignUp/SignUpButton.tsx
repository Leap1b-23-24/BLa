import React from "react";

const SignUpButton = () => {
  return (
    <div className="w-full h-fit flex flex-col gap-[16px] py-[28px]">
      <button className="btn bg-[#1C20240A] w-full h-[56px]">
        <img src="./GoogleLogo.png" alt="" />
        <p>Google-ээр нэвтрэх</p>
      </button>
      <button className="btn bg-[#1C20240A] w-full h-[56px]">
        <img src="./MicrosoftLogo.png" alt="" />
        <p>Microsoft-оор нэвтрэх</p>
      </button>
      <button className="btn bg-[#1C20240A] w-full h-[56px]">
        <img src="./AppleLogo.png" alt="" />
        <p>Apple-аар нэвтрэх</p>
      </button>
    </div>
  );
};

export default SignUpButton;
