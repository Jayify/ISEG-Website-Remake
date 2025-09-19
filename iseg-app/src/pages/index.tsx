import Head from "next/head";
import styles from "../styles/home.module.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>ISEG Club</title>
      </Head>

      {/* Nav */}
      <Navbar />

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroText}>
          <p><span>I</span>nternational</p>
          <p><span>S</span>ociety of</p>
          <p><span>E</span>steemed</p>
          <p><span>G</span>entlemen</p>
        </div>
        <img src="/hero-man.webp" alt="Man in a suit" />
      </section>

      {/* About */}
      <section id="about" className={styles.section}>
        <h2>About Us</h2>
        <p>
          ISEG Club is a place for leaders, innovators, and dreamers to connect,
          share knowledge, and grow together.
        </p>
      </section>

      {/* Gallery */}
      <section id="gallery" className={styles.section}>
        <h2>Gallery</h2>
        <div className={styles.gallery}>
          <img src="/gallery1.jpg" alt="Gallery 1" />
          <img src="/gallery2.jpg" alt="Gallery 2" />
          <img src="/gallery3.jpg" alt="Gallery 3" />
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className={styles.section}>
        <h2>Contact</h2>
        <p>Email: contact@isegclub.com</p>
        <p>Follow us on social media.</p>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}
