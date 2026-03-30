"use client";

import styles from "./ProcessSection.module.scss";

const steps = [
  {
    id: 1,
    title: "DISCOVER",
    list: ["Brief analysis", "Competitor analysis", "Target audience definition"],
    isActive: false,
  },
  {
    id: 2,
    title: "DEFINE",
    list: ["User personas", "Customer Journey Map (CJM)", "Business & user goals"],
    isActive: true,
  },
  {
    id: 3,
    title: "IDEATE",
    list: ["Brainstorming", "Concept exploration", "Sketching"],
    isActive: false,
  },
  {
    id: 4,
    title: "DESIGN",
    list: ["Visual direction", "UI / Brand design execution", "System-based design decisions"],
    isActive: true,
  },
  {
    id: 5,
    title: "DELIVERY",
    list: ["Design guidelines", "Brand / UI system documentation", "Final assets & handoff"],
    isActive: false,
  },
];

export const ProcessSection = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>PROCESS</h2>
        </div>

        <div className={styles.stepsWrapper}>
          <div className={styles.stepsScroll}>
            {steps.map((step) => (
              <div
                key={step.id}
                className={`${styles.stepCard} ${step.isActive ? styles.active : ""}`}
              >
                <div className={styles.cardHeader}>
                  <span className={styles.number}>{step.id}</span>
                  <h3 className={styles.cardTitle}>{step.title}</h3>
                </div>
                <ul className={styles.list}>
                  {step.list.map((item, index) => (
                    <li key={index} className={styles.listItem}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};