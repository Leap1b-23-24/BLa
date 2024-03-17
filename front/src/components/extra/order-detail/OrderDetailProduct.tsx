import React from "react";
import OrderDetailSingleProduct from "./OrderDetailSingleProduct";

const OrderDetailProduct = () => {
  return (
    <div className="w-full h-full gap-6 flex flex-col bg-white rounded-xl p-6">
      <header className="w-full h-fit flex flex-row items-center justify-between">
        <div className="flex flex-col gap-[4px] w-full h-fit">
          <p>Захиалгын ID дугаар: </p>
          <p>#12345678</p>
        </div>
        <select className="select w-[170px] bg-[#ECEDF0] rounded-full">
          <option disabled selected>
            Бэлтгэгдэж байна
          </option>
          <option>Homer</option>
          <option>Marge</option>
          <option>Bart</option>
          <option>Lisa</option>
          <option>Maggie</option>
        </select>
      </header>
      <div className="w-full h-fit flex flex-col gap-1">
        <p>Захиалагч: Хувь хүн </p>
        <p>Zoloosoko0526@gmail.com, 88556061</p>
      </div>
      <main className="w-full h-full overflow-y-auto flex flex-col gap-4">
        <OrderDetailSingleProduct />
        <OrderDetailSingleProduct />
      </main>
    </div>
  );
};

export default OrderDetailProduct;
