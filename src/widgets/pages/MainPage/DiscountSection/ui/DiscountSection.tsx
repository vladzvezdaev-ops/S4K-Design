"use client";

import Image from "next/image";
import { Button } from "@/shared/ui/Button/Button";
import styles from "./DiscountSection.module.scss";

interface DiscountSectionProps {
  title?: string;
  image?: string;
  text?: string;
  btnText?: string;
}

export const DiscountSection: React.FC<DiscountSectionProps> = ({
  title = "OFFER FROM ME",
  image = "/pages/salesImage.webp",
  text = "If you already have a detailed analysis of your audience and competitive landscape, I move straight to implementation.",
  btnText = "Launch project",
}) => {
  return (
    <section className={styles.DiscountSection}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.imgWrapper}>
        <Image
          src={image}
          alt="DiscountPhoto"
          width={325}
          height={318}
          className={styles.imageMain}
        />
      </div>
      <div className={styles.centerContainer}>
        <p className={styles.textSection}>{text}</p>
        <div className={styles.btnContainer}>
          <Button className={styles.launchBtn} href="/Contact">
            {btnText}
          </Button>
        </div>
      </div>
    </section>
  );
};
