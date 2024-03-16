import React from "react";

const DashBoardActiveArea = () => {
  return (
    <div className="w-full h-full flex-1 flex-col flex gap-6 bg-white rounded-xl px-6 py-[26.5px]">
      <span className="w-full h-fit py-2 flex flex-row justify-between items-center">
        <h2>Идэвхтэй бүс нутаг</h2>
        <img src="./ArrowRight.png" alt="Arrow" className="w-6 h-6" />
      </span>
      <img src="./activeArea.png" alt="sale" className="w-full h-full" />
    </div>
  );
};

export default DashBoardActiveArea;
