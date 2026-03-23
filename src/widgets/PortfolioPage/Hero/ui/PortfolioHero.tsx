"use client";

import { Button } from "@/shared/ui/Button/Button";
import styles from "./PortfolioHero.module.scss";

export const PortfolioHero = () => {
  return (
    <div className={styles.hero}>
      <h1 className={styles.title}>PORTFOLIO</h1>
      <div className={styles.btnWrapper}>
        <Button href="/contact" className={styles.launchBtnHero}>
          Launch project
        </Button>
      </div>
    </div>
  );
};
