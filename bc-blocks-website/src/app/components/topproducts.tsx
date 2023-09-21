import Image from "next/image";
import Link from "next/link";
import styles from "../styles/topproducts.module.css";
const TopProducts = () => {
  return (
    <section className={styles.section}>
      <h2>What We Sell Most</h2>
      <div className={styles.imgContainer}>
        <div className={styles.card}>
          <Image
            src="/blocks3.png"
            alt="image of blocks"
            width={100}
            height={100}
            className={styles.img1}
          ></Image>
          <h4>Blocks</h4>
        </div>
        <div className={styles.card}>
          <Image
            src="/cement.png"
            alt="image of cements"
            width={300}
            height={100}
            className={styles.img2}
          ></Image>
          <h4>Carib Cements</h4>
        </div>
        <div className={styles.card}>
          <Image
            src="/steel3.png"
            alt="image of steels"
            width={300}
            height={100}
            className={styles.img3}
          ></Image>
          <h4>Steels</h4>
        </div>
        <div className={styles.card}>
          <Image
            src="/door.png"
            alt="image of windows and doors"
            width={300}
            height={100}
            className={styles.img4}
          ></Image>
          <h4>Doors</h4>
        </div>
      </div>
      <section className={styles.salessection}>
        <h2 className={styles.onsale}>Products on sale</h2>
        <span className={styles.sales}>
          Massive discount available upto November 30th
        </span>
      </section>
    </section>
  );
};

export default TopProducts;
