import React from "react";
import SingleCard from "./SingleCard";
const cardData = [
  {
    img: "./cardImg.png",
    header: "Олон төрөл сүлжээс, өнгөтэй...",
    category: "Дугуй захтай цамц",
    price: "768,000 ₮",
  },
  {
    img: "./cardImg.png",
    header: "Олон төрөл сүлжээс, өнгөтэй...",
    category: "Дугуй захтай цамц",
    price: "768,000 ₮",
  },
  {
    img: "./cardImg.png",
    header: "Олон төрөл сүлжээс, өнгөтэй...",
    category: "Дугуй захтай цамц",
    price: "768,000 ₮",
  },
  {
    img: "./cardImg.png",
    header: "Олон төрөл сүлжээс, өнгөтэй...",
    category: "Дугуй захтай цамц",
    price: "768,000 ₮",
  },
  {
    img: "./cardImg.png",
    header: "Олон төрөл сүлжээс, өнгөтэй...",
    category: "Дугуй захтай цамц",
    price: "768,000 ₮",
  },
];

const MainBody = () => {
  return (
    <section className="w-full h-fit py-8 flex flex-row justify-center">
      <div className="w-[1237px] flex flex-col h-fit gap-8">
        <img src="./wallpaper1.png" alt="WallPaper" />
        <div className="w-full h-fit flex flex-col gap-4">
          <h2>Санал болгож буй</h2>
          <div className="w-full h-fit flex flex-row gap-4">
            {cardData.map((data, index) => (
              <SingleCard
                img={data.img}
                header={data.header}
                category={data.category}
                price={data.price}
                key={index}
              />
            ))}
          </div>
        </div>
        <div className="w-full rounded-xl overflow-hidden h-[412px] ">
          <img
            src="./wallpaper2.png"
            alt="Wallpaper"
            className="w-full h-full"
          />
        </div>

        <div className="w-full h-fit flex flex-col gap-4 pt-[28px] pb-[60px]">
          <h2>Санал болгож буй</h2>
          <div className="w-full h-fit flex flex-col gap-4">
            <div className="w-full h-fit flex flex-row gap-4">
              {cardData.map((data, index) => (
                <SingleCard
                  img={data.img}
                  header={data.header}
                  category={data.category}
                  price={data.price}
                  key={index}
                />
              ))}
            </div>
            <div className="w-full h-fit flex flex-row gap-4">
              {cardData.map((data, index) => (
                <SingleCard
                  img={data.img}
                  header={data.header}
                  category={data.category}
                  price={data.price}
                  key={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainBody;
