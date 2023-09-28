import Image from "next/image";
import Category from "./components/category";
import MainImg from "./components/mainImage";
import TopProducts from "./components/topproducts";
import HardwareOnSale from "./components/hardwareonsale";
import Input from "./components/inputs";
export default function Home() {
  return (
    <main>
      <MainImg />
      <TopProducts />
      <HardwareOnSale />
    </main>
  );
}
