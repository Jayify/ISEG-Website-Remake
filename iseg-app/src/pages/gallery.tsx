"use client";

import Image from "next/image";
import Masonry from "react-masonry-css";
import styles from "../styles/gallery.module.css";
import NavBar from "../components/navbar";
import Footer from "../components/footer";

const images = [
  { src: "/gallery/mcformal_1.jpg", alt: "Men in suits at McDonalds", caption: "McFormal" },
  { src: "/gallery/mcformal_2.jpg", alt: "Men in suits at McDonalds", caption: "Founding Fathers at a McFormal" },
  { src: "/gallery/mcformal_3.jpg", alt: "Men in suits at McDonalds", caption: "McFormal" },
  { src: "/gallery/mcformal_4.jpg", alt: "Men in suits at McDonalds", caption: "McFormal" },
  { src: "/gallery/bowling_1.jpg", alt: "Men wearing suits in front of bowling lanes", caption: "Group bowling" },
  { src: "/gallery/bowling_2.jpg", alt: "Men wearing suits in front of bowling lanes", caption: "Group bowling" },
  { src: "/gallery/boys.jpg", alt: "Three men in suits", caption: "Founding Fathers of ISEG" },
  { src: "/gallery/burger_culture.jpg", alt: "Three men in suits eating burgers", caption: "Founding Fathers of ISEG" },
  { src: "/gallery/cathedral.jpg", alt: "Men in suits posing in front of the Nelson (NZ) Cathedral", caption: "Nelson, NZ Cathedral" },
  { src: "/gallery/christmas.jpg", alt: "Men posing with Santa", caption: "ISEG Christmas" },
  { src: "/gallery/green_bamboo.jpg", alt: "Men in suits at a restaurant", caption: "Vietnamese dinner" },
  { src: "/gallery/indian.jpg", alt: "Men in suits at a restaurant", caption: "Indian dinner" },
  { src: "/gallery/jonathan_birthday.jpg", alt: "Men in suits at a restaurant", caption: "Lunch social" },
  { src: "/gallery/roding_hut.png", alt: "Men in suits in front of Roding Hut", caption: "Hut Formal" },
  { src: "/gallery/school.jpg", alt: "Men in suits", caption: "School Formal" },
  { src: "/gallery/stefanos_1.png", alt: "Men in suits at a restaurant", caption: "Pizza dinner" },
  { src: "/gallery/stefanos_2.jpg", alt: "Men in suits at a restaurant", caption: "Pizza dinner" },
  { src: "/gallery/stefanos_3.jpg", alt: "Men in suits at a restaurant", caption: "Pizza dinner" },
  { src: "/gallery/town.jpg", alt: "Men in suits", caption: "Formal" },
];

export default function Gallery() {
  const breakpointColumnsObj = {
    default: 3,
    1024: 2,
    600: 1,
  };

  return (
    <div className={styles.page}>
      <NavBar />

      <header className={styles.header}>
        <h1>Gallery</h1>
        <p>A glimpse into the world of the International Society of Esteemed Gentlemen.</p>
      </header>

      <Masonry
        breakpointCols={breakpointColumnsObj}
        className={styles.masonryGrid}
        columnClassName={styles.masonryColumn}
      >
        {images.map((img, index) => (
          <div key={index} className={styles.item} data-speed={(index % 5) + 1}>
            <div className={styles.imageWrapper}>
              <Image
                src={img.src}
                alt={img.alt}
                width={600}
                height={400}
                className={styles.image}
              />
              <div className={styles.overlay}>
                <span>{img.caption}</span>
              </div>
            </div>
          </div>
        ))}
      </Masonry>

      <Footer />
    </div>
  );
}
