"use client";

import Image from "next/image";
import styles from "./ContactHero.module.scss";

interface HeroProps {}

export const ContactHero: React.FC<HeroProps> = () => {
  return (
    <section className={styles.Hero}>
      <div className={styles.heroWrapper}>
        <Image
          className={`${styles.heroImage} ${styles.imgMobile}`}
          src="/pages/HeroMobile.jpg"
          alt="Contact Mobile"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <Image
          className={`${styles.heroImage} ${styles.imgDesktop}`}
          src="/pages/HeadHero.jpg"
          alt="Contact Desktop"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className={styles.overlay}>
          <h2 className={styles.title}>
            <span className={styles.textMobile}>CONTACT</span>
            <span className={styles.textDesktop}>CONTACT ME</span>
          </h2>
        </div>
      </div>
    </section>
  );
};
