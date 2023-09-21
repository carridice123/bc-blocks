import Image from "next/image";
import styles from "../styles/search.module.css";
import Inventorynavs from "./inventorynavs";
const MainImg = () => {
  return (
    <div className={styles.content}>
      <Inventorynavs />
      <Image
        src="/bcblockshq.png"
        alt="building of bcblocks"
        width={1340}
        height={800}
        className={styles.imgs}
      ></Image>
    </div>
  );
};

export default MainImg;
