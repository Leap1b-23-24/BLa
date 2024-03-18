import Container from "@/components/global/Container";
import DashBoardHeader from "@/components/global/DashBoardHeader";
import SideBar from "@/components/global/SideBar";
import SettingsMain from "@/components/main/settings/SettingsMain";
import React from "react";

const Home = () => {
  return (
    <Container>
      <DashBoardHeader />
      <section className="w-full h-full flex flex-row bg-[#F7F7F8]">
        <SideBar />
        <SettingsMain />
      </section>
    </Container>
  );
};

export default Home;
