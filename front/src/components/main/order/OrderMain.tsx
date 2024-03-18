"use client";
import OrderSelects from "@/components/extra/order/OrderSelects";
import OrderTable from "@/components/extra/order/OrderTable";
import FilterButton from "@/components/global/FilterButton";
import BasicModal from "@/components/global/Modal";
import React from "react";

const OrderMain = () => {
  return (
    <section className="w-full h-full flex flex-col">
      <OrderSelects />
      <div className="flex flex-col w-full h-full gap-6 px-6 py-[34px]">
        <FilterButton />
        <OrderTable />
        <BasicModal />
      </div>
    </section>
  );
};

export default OrderMain;
