import React from "react";
import SingelSideBar from "../extra/Dashboard/SingelSideBar";
const sideBarData = [
  { img: "./dashboard.png", label: "Хяналтын самбар" },
  { img: "./order.png", label: "Захиалга" },
  { img: "./income.png", label: "Орлого" },
  { img: "./product.png", label: "Бүтээгдэхүүн" },
  { img: "./settings.png", label: "Тохиргоо" },
];

const SideBar = () => {
  return (
    <div className="w-[222px] h-full bg-white flex flex-col gap-4 py-[24px]">
      {sideBarData.map((SideBar, index) => (
        <SingelSideBar key={index} label={SideBar.label} img={SideBar.img} />
      ))}
    </div>
  );
};

export default SideBar;
