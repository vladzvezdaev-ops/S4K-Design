"use client";

import styles from "./SysmoHero.module.scss";

export const SysmoHero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.tabletWrapper}>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <p className={styles.listItemTitle}>GOAL</p>
            <p className={styles.listItemText}>
              Develop a dedicated landing page for this service. The page needed
              to explain in a clear and accessible way what the system is, how
              it works, and why potential clients should choose it
            </p>
          </li>
        </ul>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <p className={styles.listItemTitle}>SCOPE OF THE WORK</p>
            <p className={styles.listItemText}>UX/UI design landing page</p>
          </li>
        </ul>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <p className={styles.listItemTitle}>CLIENT</p>
            <p className={styles.listItemText}>Sysmo.pl - IT solutions</p>
          </li>
        </ul>
      </div>
      <h1 className={styles.title}>SYSMO ODOO</h1>
    </section>
  );
};
