import MainFooter from "@/components/extra/main/MainFooter";
import MainHeader from "@/components/extra/main/MainHeader";
import MainTabs from "@/components/extra/main/MainTabs";
import React from "react";

const Home = () => {
  return (
    <section className="flex flex-col w-full bg-[#FFFFFF1A] h-fit">
      <MainHeader />
      <MainTabs />
      <MainFooter />
    </section>
  );
};

export default Home;
