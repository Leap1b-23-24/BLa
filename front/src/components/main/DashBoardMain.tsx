import React from "react";
import DashBoardCard from "../extra/DashBoardCard";
import NewProduct from "../extra/NewProduct";
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
    <section className="w-full h-full px-[24px] flex flex-col gap-[34px] pt-[34px]">
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
      <div className="w-full h-full">
        <NewProduct />
      </div>
    </section>
  );
};

export default DashBoardMain;
