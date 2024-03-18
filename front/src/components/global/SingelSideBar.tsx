"use client";
import React from "react";
import { usePathname, useRouter } from "next/navigation";

const SingelSideBar = (props: { img: string; label: string; url: string }) => {
  const { img, label, url } = props;
  const pathname = usePathname();
  const router = useRouter();
  return (
    <div
      className="w-full flex items-center h-fit py-[8px] cursor-pointer gap-[16px] px-[16px]"
      style={{ background: url === pathname ? "#1C202414" : "#fff" }}
      onClick={(e) => {
        router.push(url);
      }}
    >
      <img src={`${img}`} alt="logo" />
      <p>{label}</p>
    </div>
  );
};

export default SingelSideBar;
