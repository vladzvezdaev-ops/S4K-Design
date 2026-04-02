"use client";

import styles from "./MyExperience.module.scss";

export const MyExperience = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>MY EXPERIENCE</h2>
      <div className={styles.listContainer}>
        <ul className={styles.list}>
          <li className={styles.listTitle}>3+</li>
          <li className={styles.listText}>Brand design</li>
          <li className={styles.listItem}> 20+ projects</li>
        </ul>
        <ul className={styles.list}>
          <li className={styles.listTitle}>1+</li>
          <li className={styles.listText}>UX/UI design</li>
          <li className={styles.listItem}>7+ projects</li>
        </ul>
      </div>
    </section>
  );
};
