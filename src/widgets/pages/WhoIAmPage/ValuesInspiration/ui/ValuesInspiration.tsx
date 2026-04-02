"use client";

import styles from "./ValuesInspiration.module.scss";

const principlesData = [
  {
    title: "Transparency in relationships",
    text: "I believe in open communication, honesty, and clarity at every stage of collaboration.",
  },
  {
    title: "Emotion",
    text: "Design should evoke feelings, create connection, and leave a lasting impression.",
  },
  {
    title: "Systematic thinking",
    text: "Strong ideas need structure. I build design on logic, systems, and clear processes.",
  },
  {
    title: "Clear organization",
    text: "Order, hierarchy, and clarity turn complexity into understandable and usable solutions.",
  },
  {
    title: "Bold contrasts",
    text: "Contrast is a tool for emphasis, rhythm, and visual tension that drives attention.",
  },
  {
    title: "Loud design",
    text: "Design that speaks confidently, isn’t afraid to stand out, and makes a statement.",
  },
];

export const ValuesInspiration = () => {
  return (
    <section className={styles.container}>
      <div className={styles.titleContainer}>
        <h2 className={styles.titleTop}>MY VALUES </h2>
        <h2 className={styles.titleMiddle}>&</h2>
        <h2 className={styles.titleBottom}>INSPIRATION</h2>
      </div>
      <h2 className={styles.tabletTitle}>MY VALUES & INSPIRATION</h2>
      <div className={styles.grid}>
        {principlesData.map((item, index) => (
          <div key={index} className={styles.item}>
            <h3 className={styles.itemTitle}>{item.title}</h3>
            <p className={styles.itemText}>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
