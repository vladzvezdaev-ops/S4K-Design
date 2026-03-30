"use client";

import Image from "next/image";
import styles from "./BrandBenefitsSection.module.scss";

const data = [
  {
    title: "Trust",
    text: "A strong and consistent visual identity builds credibility and increases user confidence.",
  },
  {
    title: "Market differentiation",
    text: "A unique brand helps you stand out from competitors and secure a clear position in the market.",
  },
  {
    title: "Brand recognition",
    text: "A cohesive visual language makes the brand instantly recognizable and memorable.",
  },
  {
    title: "Increased product value",
    text: "Strong branding elevates the perceived value of the product and supports premium pricing.",
  },
];

export const BrandBenefitsSection = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <h2 className={styles.title}>BENEFITS</h2>

        <div className={styles.contentGrid}>
          <div className={styles.item}>
            <h3>{data[0].title}</h3>
            <p>{data[0].text}</p>
          </div>

          <div className={styles.item}>
            <h3>{data[1].title}</h3>
            <p>{data[1].text}</p>
          </div>

          <div className={styles.imageCenter}>
            <Image
              src="/benefits/brandBenefits.png"
              alt="Phone"
              width={450}
              height={700}
              className={styles.image}
              priority
            />
          </div>

          <div className={styles.item}>
            <h3>{data[2].title}</h3>
            <p>{data[2].text}</p>
          </div>

          <div className={styles.item}>
            <h3>{data[3].title}</h3>
            <p>{data[3].text}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
