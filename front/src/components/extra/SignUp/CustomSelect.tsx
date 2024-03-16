import React from "react";

const CustomSelect = (props: { label: string; selects: string[] }) => {
  const { label, selects } = props;
  return (
    <div className="flex flex-col gap-[8px] w-full h-fit">
      <p className="text-[16px] font-[600] font-sans text-[#121316]">{label}</p>
      <select className="select select-bordered w-full">
        <option disabled selected>
          Сонгох
        </option>
        {selects.map((option, index) => (
          <option key={index}>{option}</option>
        ))}
      </select>
    </div>
  );
};

export default CustomSelect;
