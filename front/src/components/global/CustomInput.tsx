import React from "react";

const CustomInput = (props: { label: string; question: string }) => {
  const { label, question } = props;
  return (
    <div className="w-full h-fit flex flex-col gap-[8px]">
      <p className="font-sans font-[400] text-[16px] text-[#121316]">{label}</p>
      <input
        type="text"
        placeholder={`${question}`}
        className="input input-bordered w-full"
      />
    </div>
  );
};

export default CustomInput;
