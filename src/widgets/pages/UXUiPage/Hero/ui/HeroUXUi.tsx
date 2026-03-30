"use client";

import { Button } from "@/shared/ui/Button/Button";
import styles from "./HeroUXUi.module.scss";

export const HeroUXUi = () => {
  return (
    <section className={styles.hero}>
      <h1 className={styles.title}>
        UX/UI <span className={styles.titleSpan}>DESIGN</span>
      </h1>
      <Button href="/Contact" className={styles.launchBtnHero}>
        Launch project
      </Button>
    </section>
  );
};
