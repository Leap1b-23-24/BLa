import React from "react";
import DashBoardCard from "../extra/Dashboard/DashBoardCard";
import NewProduct from "../extra/Dashboard/NewProduct";
import DashboardSales from "../extra/Dashboard/DashboardSales";
import DashBoardActiveArea from "../extra/Dashboard/DashBoardActiveArea";
const DashBoardCardData = [
  {
    img: "./dollar.png",
    labelTop: "Орлого",
    number: "235,000₮",
    labelBottom: "Өнөөдөр",
  },
  {
    img: "./order.png",
    labelTop: "Захиалга",
    number: "58",
    labelBottom: "Өнөөдөр",
  },
  {
    img: "./user.png",
    labelTop: "Хэрэглэгч",
    number: "980",
    labelBottom: "Өнөөдөр",
  },
];

const DashBoardMain = () => {
  return (
    <section className="w-full h-full px-[24px] flex flex-col gap-[34px] pt-[34px] pb-[66px]">
      <div className="w-full h-fit flex flex-row gap-[24px]">
        {DashBoardCardData.map((card, index) => (
          <DashBoardCard
            img={card.img}
            labelTop={card.labelTop}
            number={card.number}
            labelBottom={card.labelBottom}
            key={index}
          />
        ))}
      </div>
      <div className="w-full h-full flex flex-row gap-6">
        <NewProduct />
        <div className="flex flex-col flex-1 gap-6 w-full h-fit">
          <DashboardSales />
          <DashBoardActiveArea />
        </div>
      </div>
    </section>
  );
};

export default DashBoardMain;
