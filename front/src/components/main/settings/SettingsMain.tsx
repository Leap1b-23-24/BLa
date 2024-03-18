import React from "react";
import CheckIcon from "@mui/icons-material/Check";
import { Button } from "@mui/material";
import TripOriginIcon from "@mui/icons-material/TripOrigin";

const SettingsMain = () => {
  return (
    <section className="w-full h-fit flex flex-col items-center py-[50px]">
      <div className="w-full h-fit flex flex-col gap-5 p-8">
        <h3>Дэлгүүрийн профайл үүсгэх</h3>
        <div className="w-full h-fit flex flex-col gap-2">
          <div className="w-full h-fit flex flex-row items-center rounded-lg p-3 border-[1px] border-[#ECEDF0]">
            <CheckIcon />
            <p className="w-full ">Дэлгүүрийн төрлөө оруулна уу</p>
            <Button variant="outlined">Дэлгүүрийн төрөл</Button>
          </div>
          <div className="w-full h-fit flex flex-row items-center rounded-lg p-3 border-[1px] border-[#ECEDF0]">
            <CheckIcon />
            <p className="w-full ">Эхний бүтээгдэхүүнээ нэмнэ үү</p>
            <Button variant="outlined">Бүтээгдэхүүн нэмэх</Button>
          </div>
          <div className="w-full h-fit flex flex-row items-center rounded-lg p-3 border-[1px] border-[#ECEDF0]">
            <TripOriginIcon />
            <p className="w-full ">Хүргэлтийг тохируулна уу</p>
            <Button variant="outlined">Хүргэлт тохируулах</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SettingsMain;
