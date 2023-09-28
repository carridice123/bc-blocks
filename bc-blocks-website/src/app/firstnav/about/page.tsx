import styles from "./styles/about.module.css";
import Link from "next/link";

const About = () => {
  return (
    <section className={styles.section}>
      <h1>About us</h1>
      <div>
        <p>
          We are located 23East Street, Maypen where we are providing excellent
          services to our customers. Our employees are the best at what they do,
          helping you acheive your goals big or small BCblocks delivers. We
          provide strong supervision of our products hence ensuring top quality
          products are delivered to our customers on time.
        </p>
        <div>
          <h3>Why choose us</h3>
          <h5>We have the best price in maypen</h5>
          <p>
            At BCblocks we supply thousands of customers and manage to keep all
            of them happy. Due to our excellent customer support, fast delivery
            and price.
          </p>

          <p>
            Our products are sold very reasonably therefore even if your not
            close to maypen you still can save massively by ordering from us.
          </p>
        </div>

        <div>
          <p>
            Our services are not just limited to building supplies we also
            provide:
          </p>
          <ul>
            <li>
              <Link href="/bathroom">Bathroom</Link>
            </li>
            <li>
              <Link href="/kitchen">kitchen</Link>
            </li>
            <li>
              <Link href="dinning">Dinning</Link>
            </li>
            <li>
              <Link href="bedroom">Bedroom</Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
