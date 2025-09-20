"use client";

import styles from "../styles/memberships.module.css";
import NavBar from "../components/navbar";
import Footer from "../components/footer";

export default function Memberships() {
  const ranks = [
    { name: "Presentable", events: 1, color: "#00ff27", desc: "Entry-level rank, awarded upon attending your first gathering." },
    { name: "Civilised", events: 3, color: "#00ffbd", desc: "Granted to members who attend regularly and demonstrate gentlemanly conduct." },
    { name: "Respectable", events: 5, color: "#009aff", desc: "For those who have begun to establish themselves as reliable participants in society." },
    { name: "Dignified", events: 7, color: "#0e2cfd", desc: "Conferred upon members who embody grace and composure in their continued involvement." },
    { name: "Reputable", events: 10, color: "#9400ff", desc: "Recognises members who have earned esteem through consistent presence and decorum." },
    { name: "Admirable", events: 15, color: "#cf00ff", desc: "For those who contribute actively to the spirit, fellowship, and traditions of ISEG." },
    { name: "Illustrious", events: 20, color: "#ff008f", desc: "A distinguished mark of honour for members who shine through long-standing dedication." },
    { name: "Prestigious", events: 25, color: "#ff0042", desc: "Awarded to gentlemen of high regard, celebrated for their enduring commitment." },
    { name: "Distinguished", events: 30, color: "#ff0000", desc: "A rare honour reserved for exemplars of leadership, loyalty, and refinement." },
    { name: "Honourable", events: 35, color: "#ff3f00", desc: "For members whose steadfast presence elevates the standing of the entire Society." },
    { name: "Venerable", events: 40, color: "#ff8400", desc: "A lofty title granted to those whose dedication has become legendary among their peers." },
    { name: "Revered", events: 50, color: "#f1c40f", desc: "The highest rank, bestowed only upon those who have given unmatched devotion to ISEG." },
  ];

  const sectors = [
    { 
      title: "Esteemed Gentlemen", 
      desc: "Keepers of tradition, dress, and etiquette. Excludive to the Founding Fathers.", 
      color: "#f1c40f"
    },
    { 
      title: "Business Associate", 
      desc: "Entrepreneurs, CEOs, and dealmakers advancing our economic interests.", 
      color: "#3498db"
    },
    { 
      title: "Political Figure", 
      desc: "Leaders, debaters, and statesmen of our society.", 
      color: "#ff659d"
    },
    { 
      title: "Academic", 
      desc: "Scholars, thinkers, and educators preserving knowledge.", 
      color: "#d7342a"
    },
    { 
      title: "Marfia Associate", 
      desc: "Shrewd operatives navigating the social networks of ISEG.", 
      color: "#53b86f"
    },
    { 
      title: "Artisan", 
      desc: "Craftsmen, designers, and creators of distinguished works.", 
      color: "#e67e22"
    },
    { 
      title: "Entertainer", 
      desc: "Performers, musicians, and raconteurs delighting our members.", 
      color: "#00cfadff"
    },
  ];


  return (
    <div className={styles.page}>
      <NavBar />

      {/* Hero Section */}
      <header className={styles.header}>
        <h1>Memberships</h1>
        <p>Membership in the International Society of Esteemed Gentlemen is more than attendance — it is the embrace of courtesy, dignity, and authority in all things.</p>
      </header>

      {/* Join Section */}
      <section className={styles.section}>
        <h2 className={styles.subheading}>Join the Esteemed</h2>
        <p className={styles.sectionParagraph}>
          Membership within the International Society of Esteemed Gentlemen is not
          granted lightly. Entry is a privilege, bestowed only upon those who carry
          themselves with dignity, courtesy, and unwavering commitment to our ideals.
        </p>

        <div className={styles.joinCriteria}>
          <h3 className={styles.criteriaHeading}>Qualities We Honour</h3>
          <ul className={styles.criteriaList}>
            <li>Exemplary conduct and gentlemanly bearing</li>
            <li>Commitment to camaraderie and shared traditions</li>
            <li>A spirit of leadership, wit, or distinction</li>
            <li>Dedication to the society’s gatherings and legacy</li>
          </ul>
        </div>

        <p className={styles.sectionParagraph}>
          Prospective members may request consideration. All inquiries are reviewed
          by the Executive Council.
        </p>
        <button className={styles.cta}>Request Invitation</button>
      </section>


      {/* Titles & Sectors */}
      <section className={styles.section}>
        <h2 className={styles.subheading}>Sectors & Titles</h2>
        <p className={styles.sectionParagraph}>Each esteemed member of ISEG is assigned to a sector reflecting their station and is bestowed a title befitting their distinction.</p>
        <div className={styles.cardGrid}>
          {sectors.map((sector, index) => (
            <div 
              key={index} 
              className={styles.card} 
            >
              <div 
                className={styles.cardContainer} 
                style={{ '--accent-color': sector.color } as React.CSSProperties}
              >
                <h3>{sector.title}</h3>
                <p>{sector.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Ranks Section */}
      <section className={styles.section}>
        <h2 className={styles.subheading}>Ranks of Esteem</h2>
        <p className={styles.sectionParagraph}>Members ascend in rank through continued attendance, each promotion marking their dedication to the Society.</p>
        <div className={styles.cardGrid}>
          {ranks.map((rank, index) => (
            <div 
              key={index} 
              className={styles.card} 
            >
              <div 
                className={styles.cardContainer} 
                style={{ '--accent-color': rank.color } as React.CSSProperties}
              >
                <h3>{rank.name}</h3>
                <p>{rank.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
