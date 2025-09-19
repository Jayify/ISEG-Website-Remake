import styles from "../styles/footer.module.css";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import Link from "next/link";

export default function Navbar() {
  return (
    <footer className={styles.footer}>
      <div className={styles.topRow}>
        <div className={styles.motto}>
          <p>“Auctoritas, Comitas, Gravitas.”</p>
        </div>

        <nav className={styles.nav}>
          <Link href="/">Home</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/membership">Membership</Link>
          <Link href="/award">Award</Link>
          <Link href="/about">About Us</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <div className={styles.accounts}>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={20} className={styles.footerIcon} />
            <span>  Instagram</span>
          </a>
          <a href="#">
            <MdOutlineEmail size={20} className={styles.footerIcon} />
            <span>  Email</span>
          </a>
        </div>
      </div>

      <div className={styles.bottomRow}>
        <p>© {new Date().getFullYear()} International Society of Esteemed Gentlemen (ISEG). Built by Jayden Houghton.</p>
      </div>
    </footer>
  );
}
