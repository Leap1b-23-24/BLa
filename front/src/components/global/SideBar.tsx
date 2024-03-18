"use client";
import React from "react";
import SingelSideBar from "./SingelSideBar";

const sideBarData = [
  { img: "./dashboard.png", url: "/dashboard", label: "Хяналтын самбар" },
  { img: "./order.png", url: "/order", label: "Захиалга" },
  { img: "./income.png", url: "/income", label: "Орлого" },
  { img: "./product.png", url: "/product", label: "Бүтээгдэхүүн" },
  { img: "./settings.png", url: "/settings", label: "Тохиргоо" },
];

const SideBar = () => {
  return (
    <div className="w-[222px] h-full bg-white flex flex-col gap-4 py-[24px]">
      {sideBarData.map((SideBar, index) => (
        <SingelSideBar
          key={index}
          label={SideBar.label}
          img={SideBar.img}
          url={SideBar.url}
        />
      ))}
    </div>
  );
};

export default SideBar;
