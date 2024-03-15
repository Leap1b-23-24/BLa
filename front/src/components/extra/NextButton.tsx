import React from "react";

const NextButton = () => {
  return (
    <div className="w-full h-fit flex flex-row justify-between pt-[40px] ">
      <button className="btn btn-circle">
        <img src="./ArrowLeft.png" alt="ArrowLeft" />
      </button>
      <button className="btn">
        Дараах
        <img src="./ArrowRight.png" alt="ArrowRight" />
      </button>
    </div>
  );
};

export default NextButton;
