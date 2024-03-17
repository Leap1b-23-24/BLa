import React from "react";

const OrderDetailPaymentData = () => {
  return (
    <div className="flex flex-col w-full h-fit divide-y rounded-xl bg-white">
      <header className=" py-5 px-6 w-full h-fit">Төлбөрийн мэдээлэл</header>
      <main className="p-6 w-full h-full flex flex-col pb-[18px] divide-y">
        <div className="w-full h-fit flex flex-col">
          <p className=" mb-1">Бүтээгдэхүүн</p>
          <div className="w-full h-fit flex flex-col gap-4 pb-8">
            <div className="flex flex-row w-full justify-between h-fit">
              <span className="flex flex-row gap-2">
                <p className="text-nowrap w-[262px] overflow-hidden">
                  WOMEN'S HORSEBIT MULE Women’s horsebit mule
                </p>{" "}
                <p>x2</p>
              </span>
              <p>₮677,100</p>
            </div>
            <div className="flex flex-row w-full justify-between h-fit">
              <span className="flex flex-row gap-2">
                <p className="text-nowrap w-[262px] overflow-hidden">
                  WOMEN'S HORSEBIT MULE Women’s horsebit mule
                </p>{" "}
                <p>x2</p>
              </span>
              <p>₮677,100</p>
            </div>
            <div className="flex flex-row w-full justify-between h-fit">
              <span className="flex flex-row gap-2">
                <p className="text-nowrap w-[262px] overflow-hidden">Хүргэлт</p>{" "}
                <img src="./car.png" alt="car" />
              </span>
              <p>₮5,000</p>
            </div>
          </div>
        </div>
        <span className="w-full h-fit py-4">
          <span className="flex flex-row justify-between ">
            <p>Нийт төлсөн дүн</p>
            <p>₮807,800</p>
          </span>
        </span>
      </main>
    </div>
  );
};

export default OrderDetailPaymentData;
