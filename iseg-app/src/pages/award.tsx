"use client";

import styles from "../styles/award.module.css";
import NavBar from "../components/navbar";
import Footer from "../components/footer";

export default function Award() {
  const awardSections = [
    {
      title: "Active Member",
      requirements: [
        "Be registered with an ISEG branch for more than three months.",
        "Have selected your title and section.",
        "Reach the rank of Reputable (attend at least ten formal meetings)."
      ],
      reason: "Networking with other high-class citizens is a valuable skill and can lead to beneficial opportunities in the future."
    },
    {
      title: "Authority",
      requirements: [
        "Organise at least two formal meetings.",
        "Write a 200-word report for each meeting.",
        "Discuss how you found organising the event, how you chose the location, any difficulties you had, and any improvements for next time."
      ],
      reason: "A prestigious gentleman of status must have the skills to take charge and lead others."
    },
    {
      title: "Proper Mannerisms",
      requirements: [
        "Demonstrate proper dining etiquette by either:",
        "• Writing a report covering formal dining etiquette",
        "• Organising and running a workshop for other members",
        "• Attending a workshop run by another member"
      ],
      reason: "As distinguished gentlemen, it is important that we present ourselves as best we can."
    },
    {
      title: "Rise to Fame",
      requirements: [
        "Write a 500-word backstory on your character, including title, role, status, family ties, business opportunities, and philosophies."
      ],
      reason: "Self-identity and confidence are vital to embracing your superiority."
    },
    {
      title: "Outfits",
      requirements: [
        "Write a report covering four formal dress codes (e.g., black tie).",
        "Include when each code is worn, what makes them unique, and what is required to be worn.",
        "Select two codes and organise outfits that fit their requirements, using your own clothing."
      ],
      reason: "Wearing high-class clothing reflects our power, influence, and status over the lesser people."
    },
  ];

  return (
    <div className={styles.page}>
      <NavBar />

      {/* Hero Section */}
      <header className={styles.header}>
        <h1>Distinguished Gentleman Award</h1>
        <p>The Prestigious Award is the pinnacle of recognition within the International Society of Esteemed Gentlemen. It is awarded to members who exhibit 
          exceptional leadership, dedication, and the embodiment of the Society’s ideals. The award recognizes those who go beyond mere attendance or participation 
          and demonstrate a sustained commitment to personal growth, social sophistication, and mentorship.
        </p>
        <br></br>
        <p>Receiving this award is more than just a formality; it signals that a member has mastered the etiquette, authority, and social presence expected of 
          a true gentleman in the Society. It is an honor reserved for members who stand out as role models, guiding others through their example and enhancing 
          the prestige of ISEG as a whole.
        </p>
      </header>

      {/* Award Sections */}
      <section className={styles.section}>
        <h2 className={styles.subheading}>Award Requirements</h2>
        <div className={styles.cardGrid}>
          {awardSections.map((section, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.cardContainer}>
                <h3>{section.title}</h3>
                <ul>
                  {section.requirements.map((req, i) => (
                    <li key={i}>{req}</li>
                  ))}
                </ul>
                <p>{section.reason}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
