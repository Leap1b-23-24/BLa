import React from "react";
import SingleIncomeTable from "./SingleIncomeTable";
const incomeTableData = ["Захиалгын ID дугаар", "Захиалагч", "Төлбөр", "Огноо"];
const incomedata = [
  {
    id: "#123455",
    userEmail: "zoloo@gmail.com",
    phoneNumber: "88556677",
    price: "12,000₮",
    date: "2024-01-10",
  },
  {
    id: "#123455",
    userEmail: "zoloo@gmail.com",
    phoneNumber: "88556677",
    price: "12,000₮",
    date: "2024-01-10",
  },
  {
    id: "#123455",
    userEmail: "zoloo@gmail.com",
    phoneNumber: "88556677",
    price: "12,000₮",
    date: "2024-01-10",
  },
  {
    id: "#123455",
    userEmail: "zoloo@gmail.com",
    phoneNumber: "88556677",
    price: "12,000₮",
    date: "2024-01-10",
  },
  {
    id: "#123455",
    userEmail: "zoloo@gmail.com",
    phoneNumber: "88556677",
    price: "12,000₮",
    date: "2024-01-10",
  },
  {
    id: "#123455",
    userEmail: "zoloo@gmail.com",
    phoneNumber: "88556677",
    price: "12,000₮",
    date: "2024-01-10",
  },
  {
    id: "#123455",
    userEmail: "zoloo@gmail.com",
    phoneNumber: "88556677",
    price: "12,000₮",
    date: "2024-01-10",
  },
  {
    id: "#123455",
    userEmail: "zoloo@gmail.com",
    phoneNumber: "88556677",
    price: "12,000₮",
    date: "2024-01-10",
  },
  {
    id: "#123455",
    userEmail: "zoloo@gmail.com",
    phoneNumber: "88556677",
    price: "12,000₮",
    date: "2024-01-10",
  },
  {
    id: "#123455",
    userEmail: "zoloo@gmail.com",
    phoneNumber: "88556677",
    price: "12,000₮",
    date: "2024-01-10",
  },
  {
    id: "#123455",
    userEmail: "zoloo@gmail.com",
    phoneNumber: "88556677",
    price: "12,000₮",
    date: "2024-01-10",
  },
  {
    id: "#123455",
    userEmail: "zoloo@gmail.com",
    phoneNumber: "88556677",
    price: "12,000₮",
    date: "2024-01-10",
  },
  {
    id: "#123455",
    userEmail: "zoloo@gmail.com",
    phoneNumber: "88556677",
    price: "12,000₮",
    date: "2024-01-10",
  },
  {
    id: "#123455",
    userEmail: "zoloo@gmail.com",
    phoneNumber: "88556677",
    price: "12,000₮",
    date: "2024-01-10",
  },
  {
    id: "#123455",
    userEmail: "zoloo@gmail.com",
    phoneNumber: "88556677",
    price: "12,000₮",
    date: "2024-01-10",
  },
  {
    id: "#123455",
    userEmail: "zoloo@gmail.com",
    phoneNumber: "88556677",
    price: "12,000₮",
    date: "2024-01-10",
  },
];

const IncomeTable = () => {
  return (
    <div className="w-full h-fit rounded-xl bg-white divide-y">
      <header className="w-full flex flex-row h-fit">
        {incomeTableData.map((data, index) => (
          <div
            key={index}
            className="py-[14px] px-[24px] h-fit"
            style={{
              width:
                data === "Захиалгын ID дугаар"
                  ? "23.3425%"
                  : data === "Захиалагч"
                  ? "37.0165%"
                  : data === "Төлбөр"
                  ? "18.9226%"
                  : data === "Огноо"
                  ? "20.7182%"
                  : "100%",
            }}
          >
            {data}
          </div>
        ))}
      </header>
      <main className="w-full h-full divide-y bg-white flex flex-col">
        {incomedata.map((data, index) => (
          <SingleIncomeTable
            id={data.id}
            userEmail={data.userEmail}
            phoneNumber={data.phoneNumber}
            price={data.price}
            date={data.date}
            key={index}
          />
        ))}
      </main>
    </div>
  );
};

export default IncomeTable;
