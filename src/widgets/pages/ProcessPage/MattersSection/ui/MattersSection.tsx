"use client";

import styles from "./MattersSection.module.scss";
import Image from "next/image";

const data = [
  {
    title: "Increased sales through strategy",
    content:
      "A well-developed project is built on deep audience research and real user needs, which directly impacts conversion and sales.",
  },
  {
    title: "Trust and reliability",
    content:
      "Clear organization of the product and its information increases credibility and positions your brand as professional and dependable.",
  },
  {
    title: "Market differentiation",
    content:
      "Strategic design creates a distinct identity that helps your product stand out in a competitive market.",
  },
  {
    title: "Time & cost efficiency",
    content:
      "Clear structure and guidelines reduce revisions, save time, and optimize long-term costs.",
  },
];

export const MattersSection = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <h2 className={styles.title}>WHY IT MATTERS</h2>

        <div className={styles.mainContent}>
          <div className={styles.grid}>
            {data.map((item, index) => (
              <div key={index} className={styles.item}>
                <h3 className={styles.itemTitle}>{item.title}</h3>
                <p className={styles.itemContent}>{item.content}</p>
              </div>
            ))}
          </div>

          <div className={styles.imageWrapper}>
            <Image
              src="/HeroMobile.png"
              alt="Design perspective"
              fill
              className={styles.photo}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};
