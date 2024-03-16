import React from "react";

const DashboardSales = () => {
  return (
    <div className="w-full h-full rounded-xl flex flex-1 flex-col gap-6 bg-white px-6 py-[13.75px]">
      <span className="w-full h-fit py-2 flex flex-row justify-between items-center">
        <h2>Борлуулалт</h2>
        <img src="./ArrowRight.png" alt="Arrow" className="w-6 h-6" />
      </span>
      <img src="./Sales.png" alt="sale" className="w-full h-full" />
    </div>
  );
};

export default DashboardSales;
