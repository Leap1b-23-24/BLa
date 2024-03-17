import OrderDetailDeliveryData from "@/components/extra/order-detail/OrderDetailDeliveryData";
import OrderDetailProduct from "@/components/extra/order-detail/OrderDetailProduct";
import OrderDetailTab from "@/components/extra/order-detail/OrderDetailTab";
import React from "react";

const OrderDetailMain = () => {
  return (
    <section className="w-full h-full flex flex-col">
      <OrderDetailTab />
      <div className="flex flex-row w-full h-full gap-6 px-6 py-[34px]">
        <OrderDetailProduct />
        <OrderDetailDeliveryData />
      </div>
    </section>
  );
};

export default OrderDetailMain;
