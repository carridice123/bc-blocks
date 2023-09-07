import styles from "../styles/footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.div}>
        <Image
          src="/board.png"
          alt="footer image"
          width={420}
          height={200}
          className={styles.img}
        ></Image>
      </div>
    </footer>
  );
};

export default Footer;
