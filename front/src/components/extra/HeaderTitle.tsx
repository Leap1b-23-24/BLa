import React, { CSSProperties } from "react";

const HeaderTitle = (props: {
  title: string;
  textCenter: "center" | "left" | "right";
}) => {
  const { title, textCenter } = props;
  return (
    <div
      className="w-full h-fit flex flex-col pb-[20px] font-sans font-[700] text-[32px] text-[#121316]"
      style={{ textAlign: `${textCenter}` }}
    >
      <p>{title}</p>
    </div>
  );
};

export default HeaderTitle;
