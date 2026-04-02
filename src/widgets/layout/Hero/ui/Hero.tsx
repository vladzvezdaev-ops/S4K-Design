"use client";

import Image from "next/image";
import { Button } from "@/shared/ui/Button/Button";
import styles from "./Hero.module.scss";

export const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroBgWrapper}>
        <Image
          src="/pages/HeadHero.jpg"
          alt="Background"
          fill
          priority
          fetchPriority="high"
          quality={75}
          className={styles.heroImage}
          sizes="100vw"
        />
      </div>

      <div className={styles.container}>
        <h1 className={styles.title}>
          <span className={styles.titleTop}>My design</span>
          <span className={styles.titleBottom}>Your level up</span>
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
