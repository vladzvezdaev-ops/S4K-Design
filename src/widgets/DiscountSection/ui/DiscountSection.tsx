"use client";

import Image from "next/image";
import { Button } from "@/shared/ui/Button/Button";
import styles from "./DiscountSection.module.scss";

interface DiscountSectionProps {}

export const DiscountSection: React.FC<DiscountSectionProps> = () => {
  return (
    <div className={styles.DiscountSection}>
      <h2 className={styles.title}>OFFER FROM ME</h2>
      <div className={styles.imgWrapper}>
        <Image
          src="/sales/salesImage.png"
          alt="DiscountPhoto"
          width={325}
          height={318}
          priority
          className={styles.imageMain}
        />
      </div>
      <div className={styles.centerContainer}>
        <p className={styles.textSection}>
          If you already have a detailed analysis of your audience and
          competitive landscape, I move straight to implementation.
        </p>
        <div className={styles.btnContainer}>
          <Button className={styles.launchBtn} href="/contact">
            Launch project
          </Button>
        </div>
      </div>
    </div>
  );
};
