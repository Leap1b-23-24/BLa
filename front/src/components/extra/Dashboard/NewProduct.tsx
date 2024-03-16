import React from "react";
import SingleNewProduct from "./SingleNewProduct";
const productData = ["№", "Бүтээгдэхүүн", "Зарагдсан", "Үнэ"];
const singleProductData = [
  {
    OrderNumber: 1,
    img: "https://s3-alpha-sig.figma.com/img/e08f/4aba/03f40085d3fb49f21e1d8c21a73fc140?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XiuiDA4hlMTdLM08Eocin2kT9hQq7FUTy0EDllV7au5ehO5HR1xw51ChpWFAx0ZirNihreVUJFQL-nC4RJx67czXsXSrzSXUdTgdo5y9qlBwR4DYMmFjSkBZlGHhri2ANdlBRPIDyqiZNeo57opXjd18n0njwPPqipahnW7wUF5SkfZDE9rJXKWOgJ81aHzWZlviEgP6K6Q5tAvD7gByJfGAe83b8rU6YCId1mu4~pZJexj6pM~HEiHmAyUDM9TrTkOrIBn4LfdchpXsqdrjFBP~5aFq5waVfmegpclZ-lmYiW9HFkr1EpX8Jyq~LCs6oR9mLK~uXxchTciAYMXXJw__",
    title: "WOMENS HORSEBIT MULE",
    id: "#12345678",
    soldNumber: "200",
    Price: "12,000₮",
  },
  {
    OrderNumber: 1,
    img: "https://s3-alpha-sig.figma.com/img/e08f/4aba/03f40085d3fb49f21e1d8c21a73fc140?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XiuiDA4hlMTdLM08Eocin2kT9hQq7FUTy0EDllV7au5ehO5HR1xw51ChpWFAx0ZirNihreVUJFQL-nC4RJx67czXsXSrzSXUdTgdo5y9qlBwR4DYMmFjSkBZlGHhri2ANdlBRPIDyqiZNeo57opXjd18n0njwPPqipahnW7wUF5SkfZDE9rJXKWOgJ81aHzWZlviEgP6K6Q5tAvD7gByJfGAe83b8rU6YCId1mu4~pZJexj6pM~HEiHmAyUDM9TrTkOrIBn4LfdchpXsqdrjFBP~5aFq5waVfmegpclZ-lmYiW9HFkr1EpX8Jyq~LCs6oR9mLK~uXxchTciAYMXXJw__",
    title: "WOMENS HORSEBIT MULE",
    id: "#12345678",
    soldNumber: "200",
    Price: "12,000₮",
  },
  {
    OrderNumber: 1,
    img: "https://s3-alpha-sig.figma.com/img/e08f/4aba/03f40085d3fb49f21e1d8c21a73fc140?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XiuiDA4hlMTdLM08Eocin2kT9hQq7FUTy0EDllV7au5ehO5HR1xw51ChpWFAx0ZirNihreVUJFQL-nC4RJx67czXsXSrzSXUdTgdo5y9qlBwR4DYMmFjSkBZlGHhri2ANdlBRPIDyqiZNeo57opXjd18n0njwPPqipahnW7wUF5SkfZDE9rJXKWOgJ81aHzWZlviEgP6K6Q5tAvD7gByJfGAe83b8rU6YCId1mu4~pZJexj6pM~HEiHmAyUDM9TrTkOrIBn4LfdchpXsqdrjFBP~5aFq5waVfmegpclZ-lmYiW9HFkr1EpX8Jyq~LCs6oR9mLK~uXxchTciAYMXXJw__",
    title: "WOMENS HORSEBIT MULE",
    id: "#12345678",
    soldNumber: "200",
    Price: "12,000₮",
  },
  {
    OrderNumber: 1,
    img: "https://s3-alpha-sig.figma.com/img/e08f/4aba/03f40085d3fb49f21e1d8c21a73fc140?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XiuiDA4hlMTdLM08Eocin2kT9hQq7FUTy0EDllV7au5ehO5HR1xw51ChpWFAx0ZirNihreVUJFQL-nC4RJx67czXsXSrzSXUdTgdo5y9qlBwR4DYMmFjSkBZlGHhri2ANdlBRPIDyqiZNeo57opXjd18n0njwPPqipahnW7wUF5SkfZDE9rJXKWOgJ81aHzWZlviEgP6K6Q5tAvD7gByJfGAe83b8rU6YCId1mu4~pZJexj6pM~HEiHmAyUDM9TrTkOrIBn4LfdchpXsqdrjFBP~5aFq5waVfmegpclZ-lmYiW9HFkr1EpX8Jyq~LCs6oR9mLK~uXxchTciAYMXXJw__",
    title: "WOMENS HORSEBIT MULE",
    id: "#12345678",
    soldNumber: "200",
    Price: "12,000₮",
  },
  {
    OrderNumber: 1,
    img: "https://s3-alpha-sig.figma.com/img/e08f/4aba/03f40085d3fb49f21e1d8c21a73fc140?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XiuiDA4hlMTdLM08Eocin2kT9hQq7FUTy0EDllV7au5ehO5HR1xw51ChpWFAx0ZirNihreVUJFQL-nC4RJx67czXsXSrzSXUdTgdo5y9qlBwR4DYMmFjSkBZlGHhri2ANdlBRPIDyqiZNeo57opXjd18n0njwPPqipahnW7wUF5SkfZDE9rJXKWOgJ81aHzWZlviEgP6K6Q5tAvD7gByJfGAe83b8rU6YCId1mu4~pZJexj6pM~HEiHmAyUDM9TrTkOrIBn4LfdchpXsqdrjFBP~5aFq5waVfmegpclZ-lmYiW9HFkr1EpX8Jyq~LCs6oR9mLK~uXxchTciAYMXXJw__",
    title: "WOMENS HORSEBIT MULE",
    id: "#12345678",
    soldNumber: "200",
    Price: "12,000₮",
  },
  {
    OrderNumber: 1,
    img: "https://s3-alpha-sig.figma.com/img/e08f/4aba/03f40085d3fb49f21e1d8c21a73fc140?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XiuiDA4hlMTdLM08Eocin2kT9hQq7FUTy0EDllV7au5ehO5HR1xw51ChpWFAx0ZirNihreVUJFQL-nC4RJx67czXsXSrzSXUdTgdo5y9qlBwR4DYMmFjSkBZlGHhri2ANdlBRPIDyqiZNeo57opXjd18n0njwPPqipahnW7wUF5SkfZDE9rJXKWOgJ81aHzWZlviEgP6K6Q5tAvD7gByJfGAe83b8rU6YCId1mu4~pZJexj6pM~HEiHmAyUDM9TrTkOrIBn4LfdchpXsqdrjFBP~5aFq5waVfmegpclZ-lmYiW9HFkr1EpX8Jyq~LCs6oR9mLK~uXxchTciAYMXXJw__",
    title: "WOMENS HORSEBIT MULE",
    id: "#12345678",
    soldNumber: "200",
    Price: "12,000₮",
  },
  {
    OrderNumber: 1,
    img: "https://s3-alpha-sig.figma.com/img/e08f/4aba/03f40085d3fb49f21e1d8c21a73fc140?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XiuiDA4hlMTdLM08Eocin2kT9hQq7FUTy0EDllV7au5ehO5HR1xw51ChpWFAx0ZirNihreVUJFQL-nC4RJx67czXsXSrzSXUdTgdo5y9qlBwR4DYMmFjSkBZlGHhri2ANdlBRPIDyqiZNeo57opXjd18n0njwPPqipahnW7wUF5SkfZDE9rJXKWOgJ81aHzWZlviEgP6K6Q5tAvD7gByJfGAe83b8rU6YCId1mu4~pZJexj6pM~HEiHmAyUDM9TrTkOrIBn4LfdchpXsqdrjFBP~5aFq5waVfmegpclZ-lmYiW9HFkr1EpX8Jyq~LCs6oR9mLK~uXxchTciAYMXXJw__",
    title: "WOMENS HORSEBIT MULE",
    id: "#12345678",
    soldNumber: "200",
    Price: "12,000₮",
  },
  {
    OrderNumber: 1,
    img: "https://s3-alpha-sig.figma.com/img/e08f/4aba/03f40085d3fb49f21e1d8c21a73fc140?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XiuiDA4hlMTdLM08Eocin2kT9hQq7FUTy0EDllV7au5ehO5HR1xw51ChpWFAx0ZirNihreVUJFQL-nC4RJx67czXsXSrzSXUdTgdo5y9qlBwR4DYMmFjSkBZlGHhri2ANdlBRPIDyqiZNeo57opXjd18n0njwPPqipahnW7wUF5SkfZDE9rJXKWOgJ81aHzWZlviEgP6K6Q5tAvD7gByJfGAe83b8rU6YCId1mu4~pZJexj6pM~HEiHmAyUDM9TrTkOrIBn4LfdchpXsqdrjFBP~5aFq5waVfmegpclZ-lmYiW9HFkr1EpX8Jyq~LCs6oR9mLK~uXxchTciAYMXXJw__",
    title: "WOMENS HORSEBIT MULE",
    id: "#12345678",
    soldNumber: "200",
    Price: "12,000₮",
  },
  {
    OrderNumber: 1,
    img: "https://s3-alpha-sig.figma.com/img/e08f/4aba/03f40085d3fb49f21e1d8c21a73fc140?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XiuiDA4hlMTdLM08Eocin2kT9hQq7FUTy0EDllV7au5ehO5HR1xw51ChpWFAx0ZirNihreVUJFQL-nC4RJx67czXsXSrzSXUdTgdo5y9qlBwR4DYMmFjSkBZlGHhri2ANdlBRPIDyqiZNeo57opXjd18n0njwPPqipahnW7wUF5SkfZDE9rJXKWOgJ81aHzWZlviEgP6K6Q5tAvD7gByJfGAe83b8rU6YCId1mu4~pZJexj6pM~HEiHmAyUDM9TrTkOrIBn4LfdchpXsqdrjFBP~5aFq5waVfmegpclZ-lmYiW9HFkr1EpX8Jyq~LCs6oR9mLK~uXxchTciAYMXXJw__",
    title: "WOMENS HORSEBIT MULE",
    id: "#12345678",
    soldNumber: "200",
    Price: "12,000₮",
  },
  {
    OrderNumber: 1,
    img: "https://s3-alpha-sig.figma.com/img/e08f/4aba/03f40085d3fb49f21e1d8c21a73fc140?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XiuiDA4hlMTdLM08Eocin2kT9hQq7FUTy0EDllV7au5ehO5HR1xw51ChpWFAx0ZirNihreVUJFQL-nC4RJx67czXsXSrzSXUdTgdo5y9qlBwR4DYMmFjSkBZlGHhri2ANdlBRPIDyqiZNeo57opXjd18n0njwPPqipahnW7wUF5SkfZDE9rJXKWOgJ81aHzWZlviEgP6K6Q5tAvD7gByJfGAe83b8rU6YCId1mu4~pZJexj6pM~HEiHmAyUDM9TrTkOrIBn4LfdchpXsqdrjFBP~5aFq5waVfmegpclZ-lmYiW9HFkr1EpX8Jyq~LCs6oR9mLK~uXxchTciAYMXXJw__",
    title: "WOMENS HORSEBIT MULE",
    id: "#12345678",
    soldNumber: "200",
    Price: "12,000₮",
  },
  {
    OrderNumber: 1,
    img: "https://s3-alpha-sig.figma.com/img/e08f/4aba/03f40085d3fb49f21e1d8c21a73fc140?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XiuiDA4hlMTdLM08Eocin2kT9hQq7FUTy0EDllV7au5ehO5HR1xw51ChpWFAx0ZirNihreVUJFQL-nC4RJx67czXsXSrzSXUdTgdo5y9qlBwR4DYMmFjSkBZlGHhri2ANdlBRPIDyqiZNeo57opXjd18n0njwPPqipahnW7wUF5SkfZDE9rJXKWOgJ81aHzWZlviEgP6K6Q5tAvD7gByJfGAe83b8rU6YCId1mu4~pZJexj6pM~HEiHmAyUDM9TrTkOrIBn4LfdchpXsqdrjFBP~5aFq5waVfmegpclZ-lmYiW9HFkr1EpX8Jyq~LCs6oR9mLK~uXxchTciAYMXXJw__",
    title: "WOMENS HORSEBIT MULE",
    id: "#12345678",
    soldNumber: "200",
    Price: "12,000₮",
  },
];

const NewProduct = () => {
  return (
    <section className="w-full h-full flex-1 rounded-xl bg-white flex flex-col py-[16px] px-[24px]">
      <div className="w-full h-fit flex flex-row items-center justify-between pb-[20px]">
        <p>Шилдэг бүтээгдэхүүн</p>
        <img src="./ArrowRight.png" alt="Arrow" />
      </div>
      <div className="w-full h-fit flex py-[14px] flex-row bg-[#D6D8DB]">
        {productData.map((product, index) =>
          product === "№" ? (
            <span className="w-[57px] flex justify-center h-fit" key={index}>
              {product}
            </span>
          ) : product === "Бүтээгдэхүүн" ? (
            <span className="w-[225px] flex justify-center h-fit" key={index}>
              {product}
            </span>
          ) : (
            <span className="w-[125.5px] flex justify-center h-fit" key={index}>
              {product}
            </span>
          )
        )}
      </div>
      <div className="w-full h-full flex flex-col divide-y overflow-scroll">
        {singleProductData.map((data, index) => (
          <SingleNewProduct
            OrderNumber={data.OrderNumber}
            img={data.img}
            title={data.title}
            id={data.id}
            soldNumber={data.soldNumber}
            Price={data.Price}
            key={index}
          />
        ))}
      </div>
    </section>
  );
};

export default NewProduct;
