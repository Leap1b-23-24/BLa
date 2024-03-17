import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const footerData = [
  "Холбоо барих",
  "Үйлчилгээний нөхцөл",
  "Хүргэлтийн бүс",
  "Нууцлалын бодлого",
];

const MainFooter = () => {
  return (
    <footer className="w-full h-fit flex bg-[#12A795] py-[50px] justify-center">
      <div className="w-[1200px] h-fit flex flex-col divide-y">
        <div className="w-full pb-6 h-fit flex flex-col items-center">
          <img
            src="./whiteLogo.png"
            alt="Logo"
            className="w-[173px] h-[31px] mb-12"
          />
          <div className="w-fit mb-6 flex flex-row gap-[68px] h-fit ">
            {footerData.map((data, index) => (
              <a href={`./`} key={index} className="text-white underline">
                {data}
              </a>
            ))}
          </div>
          <div className="flex flex-row gap-[16px] w-fit h-fit ">
            <FaFacebook size={35} color={"white"} />
            <FaInstagram size={35} color="white" />
            <FaTwitter size={35} color="white" />
          </div>
        </div>
        <div className="w-full pt-6 h-fit flex flex-col items-center gap-2 text-white">
          <p>© 2024 Pinecone Ecommerse LLC </p>
          <p>Зохиогчийн эрх хуулиар хамгаалагдсан.</p>
        </div>
      </div>
    </footer>
  );
};

export default MainFooter;
