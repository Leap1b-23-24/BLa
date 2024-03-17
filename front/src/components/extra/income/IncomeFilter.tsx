import DateFilterButton from "@/components/global/DateFilterButton";
import React from "react";

const IncomeFilter = () => {
  return (
    <div className="bg-white rounded-xl  flex flex-col divide-y w-full h-fit">
      <header className="w-full h-fit p-6 flex flex-row items-center justify-between">
        <h2 className="text-[28px] font-bold font-sans">Орлого</h2>
        <button className="btn text-[14px] w-[154px] h-9">
          <img src="./download.png" alt="Download" className="w-5 h-5" />
          Хуулга татах
        </button>
      </header>
      <main className="w-full h-fit p-6 flex flex-row justify-between items-center">
        <h2 className="text-[28px] font-bold font-sans">235,000₮</h2>
        <DateFilterButton />
      </main>
    </div>
  );
};

export default IncomeFilter;
