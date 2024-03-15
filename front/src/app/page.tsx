import DashBoardHeader from "@/components/extra/DashBoardHeader";
import PineconeFooter from "@/components/extra/PineconeFooter";
import PineconeHeader from "@/components/extra/PineconeHeader";
import SignUpButton from "@/components/extra/SignUpButton";
import Container from "@/components/full/Container";
import SideBar from "@/components/main/SideBar";
import StepsMain3 from "@/components/main/StepsMain3";

export default function Home() {
  return (
    <Container>
      <DashBoardHeader />
      <section className="w-full h-full flex flex-row bg-[#F7F7F8]">
        <SideBar />
      </section>
    </Container>
  );
}
