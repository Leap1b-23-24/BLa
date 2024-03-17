import DashBoardHeader from "@/components/global/DashBoardHeader";
import Container from "@/components/global/Container";
import DashBoardMain from "@/components/main/dashboard/DashBoardMain";
import SideBar from "@/components/global/SideBar";

export default function Home() {
  return (
    <Container>
      <DashBoardHeader />
      <section className="w-full h-full flex flex-row bg-[#F7F7F8]">
        <SideBar />
        <DashBoardMain />
      </section>
    </Container>
  );
}
