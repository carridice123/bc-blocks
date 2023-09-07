import Image from "next/image";
import styles from "../styles/search.module.css";
const MainImg = () => {
  return (
    <div className={styles.content}>
      <div className={styles.searchbar}>
        <Image
          src="/search.png"
          alt="search bar"
          width={30}
          height={30}
        ></Image>
        <input className={styles.srch} type="text" placeholder="search" />
      </div>
      <Image
        src="/mainimg.png"
        alt="image showing hardwares"
        width={1340}
        height={800}
      ></Image>
    </div>
  );
};

export default MainImg;
