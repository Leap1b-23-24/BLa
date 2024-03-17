import React from "react";

const SingleProductTable = () => {
  return (
    <div className="py-[16px] flex flex-row items-center w-full h-fit">
      <div className="px-[24px] h-fit w-[5.8119%]">
        <input type="checkbox" className="w-5 h-5" />
      </div>
      <div className=" px-[24px] w-[13.4017%] flex flex-row items-center gap-3">
        <img src="./avatar.png" alt="Avatar" className="w-10 h-10" />
        <div className="w-fit h-fit flex flex-col">
          <p>Laptop</p>
          <p>id</p>
        </div>
      </div>
      <div className=" px-[24px] w-[18.2905%] h-fit">Female,back</div>
      <div className=" px-[24px] w-[13.4017%] h-fit">Price</div>
      <div className=" px-[24px] w-[13.4017%] h-fit">Total</div>
      <div className=" px-[24px] w-[13.4017%] h-fit">Sold</div>
      <div className=" px-[24px] w-[13.4017%] h-fit">Add Date</div>
      <div className=" px-[24px] w-[8.8888%] h-fit"></div>
    </div>
  );
};

export default SingleProductTable;
