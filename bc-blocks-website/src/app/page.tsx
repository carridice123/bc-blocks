import Image from "next/image";
import Navbar from "./components/nav";
import Category from "./components/category";
import MainImg from "./components/mainImage";
import Footer from "./components/footer";
import TopProducts from "./components/topproducts";
import HardwareOnSale from "./components/hardwareonsale";
export default function Home() {
  return (
    <main>
      <Navbar />
      <Category />
      <MainImg />
      <TopProducts />
      <HardwareOnSale />
      <Footer />
    </main>
  );
}
