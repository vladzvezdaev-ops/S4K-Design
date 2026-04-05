"use client";

import Image from "next/image";
import { Inst } from "@/shared/ui/Icon/Network/Inst";
import styles from "./MyInstagram.module.scss";

const INSTAGRAM_URL =
  "https://www.instagram.com/s4k.design?igsh=MWtqOWJ1MmY0cGxmMg=";

interface MyInstagramProps {
  title?: string;
  url?: string;
  images?: string[];
}

export const MyInstagram: React.FC<MyInstagramProps> = ({
  title = "MY INSTAGRAM",
  url = "https://www.instagram.com/s4k.design",
  images = [
    "/myInst/MyInstagramImg1.jpg",
    "/myInst/MyInstagramImg2.jpg",
    "/myInst/MyInstagramImg3.jpg",
    "/myInst/MyInstagramImg4.jpg",
  ],
}) => {
  return (
    <section className={styles.MyInstagram}>
      <h2 className={styles.title}>{title}</h2>

      <div className={styles.imgWrapper}>
        {images.map((src, index) => (
          <a
            key={index}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.imgItem}
          >
            {/* Важно: src теперь просто строка из массива */}
            <Image
              src={src}
              alt={`InstImage-${index}`}
              width={170}
              height={220}
            />
          </a>
        ))}
      </div>

      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.instImage}
      >
        <Inst />
      </a>
    </section>
  );
};
