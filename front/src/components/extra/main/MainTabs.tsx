import React from "react";
const MainTabsData = ["Хямдралтай", "Эрэгтэй", "Эмэгтэй", "Хүүхдийн"];

const MainTabs = () => {
  return (
    <header className="w-full h-fit flex bg-white flex-row justify-center font-sans font-semibold text-[14px] py-[6px]">
      <div className="w-[1243px] items-center h-fit flex flex-row gap-[35px]">
        <img src="./3lineIcon.png" alt="Icon" className="w-9 h-9" />
        <div className="flex flex-row w-full h-fit gap-2">
          {MainTabsData.map((data, index) => (
            <span key={index}>{data}</span>
          ))}
        </div>
      </div>
    </header>
  );
};

export default MainTabs;
