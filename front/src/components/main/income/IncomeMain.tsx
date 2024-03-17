import IncomeFilter from "@/components/extra/income/IncomeFilter";
import IncomeTable from "@/components/extra/income/IncomeTable";
import OrderSelects from "@/components/extra/order/OrderSelects";
import React from "react";

const IncomeMain = () => {
  return (
    <section className="w-full h-full flex flex-col">
      <div className="flex flex-col w-full h-full gap-6 px-6 py-[34px]">
        <IncomeFilter />
        <IncomeTable />
      </div>
    </section>
  );
};

export default IncomeMain;
