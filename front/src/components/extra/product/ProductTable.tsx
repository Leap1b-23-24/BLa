import React from "react";
import SingleProductTable from "./SingleProductTable";
const productDatas = ["", "", "", "", "", "", "", "", "", ""];
const productTableData = [
  "",
  "Бүтээгдэхүүн",
  "Ангилал",
  "Үнэ",
  "Үлдэгдэл",
  "Зарагдсан",
  "Нэмсэн огноо",
];
const ProductTable = () => {
  return (
    <div className="w-full h-full rounded-xl bg-white flex flex-col divide-y">
      <header className="flex flex-row items-center w-full h-fit">
        {productTableData.map((data, index) => (
          <div
            key={index}
            className="py-[14px] px-[24px] h-fit"
            style={{
              width:
                data === ""
                  ? `5.8119%`
                  : data === "Бүтээгдэхүүн"
                  ? `13.4017%`
                  : data === "Ангилал"
                  ? `18.2905%`
                  : data === "Үнэ"
                  ? `13.4017%`
                  : data === "Үлдэгдэл"
                  ? `13.4017%`
                  : data === "Зарагдсан"
                  ? `13.4017%`
                  : data === "Нэмсэн огноо"
                  ? `13.4017%`
                  : "8.8888%",
            }}
          >
            {data}
          </div>
        ))}
      </header>
      <main className="w-full h-fit flex flex-col divide-y">
        {productDatas.map((data, index) => (
          <SingleProductTable key={index} />
        ))}
      </main>
    </div>
  );
};

export default ProductTable;
