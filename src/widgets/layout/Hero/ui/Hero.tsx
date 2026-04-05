"use client";

import Image from "next/image";
import { Button } from "@/shared/ui/Button/Button";
import styles from "./Hero.module.scss";

interface HeroProps {
  titleTop?: string;
  titleBottom?: string;
  desktopImage?: string;
  mobileImage?: string;
}

export const Hero: React.FC<HeroProps> = ({
  titleTop = "My design",
  titleBottom = "Your level up",
  desktopImage = "/pages/HeadHero.jpg",
  mobileImage = "/pages/HeroMobile.jpg",
}) => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroBgWrapper}>
        <Image
          src={desktopImage}
          alt="Background Desktop"
          fill
          priority
          quality={75}
          className={`${styles.heroImage} ${styles.desktopOnly}`}
          sizes="100vw"
        />
        <Image
          src={mobileImage}
          alt="Background Mobile"
          fill
          priority
          quality={75}
          className={`${styles.heroImage} ${styles.mobileOnly}`}
          sizes="100vw"
        />
      </div>

      <div className={styles.container}>
        <h1 className={styles.title}>
          <span className={styles.titleTop}>{titleTop}</span>
          <span className={styles.titleBottom}>{titleBottom}</span>
        </h1>

        <div className={styles.btnWrapper}>
          <Button href="/Contact" className={styles.launchBtnHero}>
            Launch project
          </Button>
        </div>
      </div>
    </section>
  );
};