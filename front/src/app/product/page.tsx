import DashBoardHeader from "@/components/global/DashBoardHeader";
import Container from "@/components/global/Container";
import SideBar from "@/components/global/SideBar";
import ProductMain from "@/components/main/product/ProductMain";

export default function Home() {
  return (
    <Container>
      <DashBoardHeader />
      <section className="w-full h-full flex flex-row bg-[#F7F7F8]">
        <SideBar />
        <ProductMain />
      </section>
    </Container>
  );
}
