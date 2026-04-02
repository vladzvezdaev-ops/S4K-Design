"use client";

import { Button } from "@/shared/ui/Button/Button";
import styles from "./PortfolioHero.module.scss";

export const PortfolioHero = () => {
  return (
    <section className={styles.hero}>
      <h1 className={styles.title}>PORTFOLIO</h1>
      <div className={styles.btnWrapper}>
        <Button href="/Contact" className={styles.launchBtnHero}>
          Launch project
        </Button>
      </div>
    </section>
  );
};
