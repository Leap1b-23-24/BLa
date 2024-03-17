import React from "react";

const Container = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <section className="bg-white w-full items-center h-screen flex flex-col justify-between">
      {children}
    </section>
  );
};

export default Container;
