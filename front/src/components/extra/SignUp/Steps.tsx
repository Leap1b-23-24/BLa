import React from "react";

const Steps = (props: { step: number }) => {
  const { step } = props;
  return (
    <div className="w-[792px] h-fit flex flex-row justify-center px-[24px]">
      {step === 1 ? (
        <ul className="steps h-full w-full">
          <li className="step step-neutral">Дэлгүүрийн нэр</li>
          <li className="step">Бүс нутаг</li>
          <li className="step">Нэмэлт мэдээлэл</li>
        </ul>
      ) : step === 2 ? (
        <ul className="steps h-full w-full">
          <li data-content="✓" className="step step-neutral">
            Дэлгүүрийн нэр
          </li>
          <li className="step step-neutral">Бүс нутаг</li>
          <li className="step">Нэмэлт мэдээлэл</li>
        </ul>
      ) : step === 3 ? (
        <ul className="steps h-full w-full">
          <li data-content="✓" className="step step-neutral">
            Дэлгүүрийн нэр
          </li>
          <li data-content="✓" className="step step-neutral">
            Бүс нутаг
          </li>
          <li className="step step-neutral">Нэмэлт мэдээлэл</li>
        </ul>
      ) : (
        ""
      )}
    </div>
  );
};

export default Steps;
