import styles from "../styles/nav.module.css";
import Image from "next/image";

const Navbar = () => {
  return (
    <section className={styles.nav}>
      <nav className={styles.firstNav}>
        <ul className={styles.ul}>
          <li>Home</li>
          <li>about</li>
          <li>Contact us</li>
          <li>get-Verified</li>
        </ul>
      </nav>
      <div className={styles.logoContainer}>
        <Image
          src="/bclogo2.png"
          alt="logo"
          width={300}
          height={300}
          className={styles.img}
        ></Image>
        <nav className={styles.secondNav}>
          <ul className={styles.secondUl}>
            <li>Inventory</li>
            <li>On Sale</li>
            <li>Contact us</li>
            <li>My Cart</li>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
