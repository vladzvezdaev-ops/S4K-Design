"use client";

import Image from "next/image";
import styles from "./WhoIAmHi.module.scss";

export const WhoIAmHi = () => {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.PhotoSection}>
          <Image
            src="/pages/HeroMobile.png"
            alt="Hi Photo"
            width={200}
            height={150}
            className={styles.photo}
          />
        </div>
        <div className={styles.textSection}>
          <h3 className={styles.textTitle}>HI</h3>
          <p>My name is Sofiia </p>
          <p>
            I’m a UX/UI and Brand Designer focused on creating clear,
            functional, and emotionally engaging digital products.
          </p>
          <p>
            I work at the intersection of strategy, visual identity, and user
            experience - translating complex ideas into intuitive, structured,
            and aesthetically balanced solutions.
          </p>
          <p>
            My approach combines research, structure, and visual storytelling to
            create designs that work not only visually, but strategically.
          </p>
        </div>
      </div>
    </div>
  );
};
