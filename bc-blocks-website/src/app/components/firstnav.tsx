import styles from "../styles/nav.module.css";
import Link from "next/link";
import Image from "next/image";
import Input from "./inputs";
const Navbar = () => {
  return (
    <section className={styles.nav}>
      <nav className={styles.firstNav}>
        <ul className={styles.ul}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/firstnav/about">about</Link>
          </li>
          <li>
            <Link href="/firstnav/contact">contact us</Link>
          </li>
          <li>
            <Link href="/firstnav/verify">get-Verified</Link>
          </li>
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
        <div className={styles.searchbar}>
          <Input />
        </div>
      </div>
    </section>
  );
};

export default Navbar;
