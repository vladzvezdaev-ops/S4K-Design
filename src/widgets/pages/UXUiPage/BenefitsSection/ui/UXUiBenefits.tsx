"use client";

import Image from "next/image";
import styles from "./UXUiBenefits.module.scss";

const data = [
  {
    title: "Broader audience reach",
    text: "A well-designed interface makes the product clear and accessible to different user groups, expanding your audience.",
  },
  {
    title: "Sense of reliability for users",
    text: "Intuitive UX and refined UI create trust and communicate professionalism and stability.",
  },
  {
    title: "Brand scalability",
    text: "A flexible and system-based design allows the product to grow easily, adapt to new needs, and scale to new markets.",
  },
  {
    title: "24/7 sales",
    text: "A digital product works around the clock, turning your website into a continuous sales and lead-generation tool.",
  },
];

export const UXUiBenefits = () => {
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
              src="/benefits/uxUiBenefits.webp"
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
