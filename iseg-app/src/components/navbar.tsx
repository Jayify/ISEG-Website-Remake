import Image from "next/image";
import styles from "../styles/navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className={styles.navWrapper}>
        {/* Top Bar */}
        <div className={styles.topBar}>
            <span className={styles.motto}>
                <i>Auctoritas, Comitas, Gravitas</i>
            </span>
            <span className={styles.accounts}>
                <Link href="/login">Member Login</Link>
            </span>
        </div>

        {/* Main Nav */}
        <div className={styles.navContainer}>
            <nav className={styles.navbar}>
                <span className={styles.navbarLeft}>
                    <Link href="/">HOME</Link>
                    <Link href="/gallery">GALLERY</Link>
                    <Link href="/membership">MEMBERSHIP</Link>
                </span>
                
                <span className={styles.navbarRight}>
                    <Link href="/award">AWARD</Link>
                    <Link href="/about">ABOUT US</Link>
                    <Link href="/contact">CONTACT</Link>
                </span>

                {/* Logo */}
                <div className={styles.logoWrapper}>
                    <Link href="/" className={styles.logoLink}>
                    <Image
                    src="/iseg_logo.webp"
                    alt="ISEG Logo"
                    width={120}
                    height={120}
                    className={styles.logo}
                    />
                </Link>
                </div>
            </nav>
        </div>
    </div>
  );
}
