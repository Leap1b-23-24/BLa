import MainFooter from "@/components/extra/main/MainFooter";
import MainHeader from "@/components/extra/main/MainHeader";
import MainTabs from "@/components/extra/main/MainTabs";
import MainBody from "@/components/main/main/MainBody";
import React from "react";

const Home = () => {
  return (
    <section className="flex flex-col w-full bg-[#F7F7F8] h-fit">
      <MainHeader />
      <MainTabs />
      <MainBody />
      <MainFooter />
    </section>
  );
};

export default Home;
