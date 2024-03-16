import DashBoardHeader from "@/components/extra/Dashboard/DashBoardHeader";
import Container from "@/components/full/Container";
import DashBoardMain from "@/components/main/DashBoardMain";
import SideBar from "@/components/main/SideBar";

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
