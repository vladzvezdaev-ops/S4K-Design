"use client";

import Image from "next/image";
import { Inst } from "@/shared/ui/Icon/Network/Inst";
import styles from "./MyInstagram.module.scss";

const INSTAGRAM_URL =
  "https://www.instagram.com/s4k.design?igsh=MWtqOWJ1MmY0cGxmMg=";

export const MyInstagram: React.FC = () => {
  const images = [
    { src: "/myInst/MyInstagramImg1.jpg", alt: "InstImage1" },
    { src: "/myInst/MyInstagramImg2.jpg", alt: "InstImage2" },
    { src: "/myInst/MyInstagramImg3.jpg", alt: "InstImage3" },
    { src: "/myInst/MyInstagramImg4.jpg", alt: "InstImage4" },
  ];

  return (
    <section className={styles.MyInstagram}>
      <h2 className={styles.title}>MY INSTAGRAM</h2>

      <div className={styles.imgWrapper}>
        {images.map((img, index) => (
          <a
            key={index}
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.imgItem}
          >
            <Image src={img.src} alt={img.alt} width={170} height={220} />
          </a>
        ))}
      </div>

      <a
        href={INSTAGRAM_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.instImage}
      >
        <Inst />
      </a>
    </section>
  );
};
