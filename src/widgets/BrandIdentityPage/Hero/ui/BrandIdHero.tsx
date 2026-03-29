"use client";

import { Button } from "@/shared/ui/Button/Button";
import styles from "./BrandIdHero.module.scss";

export const BrandIdHero = () => {
  return (
    <section className={styles.hero}>
      <h1 className={styles.title}>
        BRAND IDENTITY <span className={styles.titleSpan}>DESIGN</span>
      </h1>
      <Button href="/contact" className={styles.launchBtnHero}>
        Launch project
      </Button>
    </section>
  );
};
