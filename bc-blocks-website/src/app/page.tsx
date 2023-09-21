import Image from "next/image";
import Navbar from "./components/firstnav";
import Category from "./components/category";
import MainImg from "./components/mainImage";
import Footer from "./components/footer";
import TopProducts from "./components/topproducts";
import HardwareOnSale from "./components/hardwareonsale";
import Input from "./components/inputs";
export default function Home() {
  return (
    <main>
      <Navbar />
      <MainImg />
      <TopProducts />
      <HardwareOnSale />
      <Footer />
    </main>
  );
}
