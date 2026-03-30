"use client";

import styles from "./UXUiProcessSection.module.scss";

const uxuiData = [
  {
    number: "1",
    title: "EMPATHIZE",
    items: [
      "Client brief",
      "Secondary research",
      "Competitor analysis",
      "Surveys",
      "In-depth interviews",
    ],
    isHighlighted: false,
  },
  {
    number: "2",
    title: "DEFINE",
    items: [
      "User personas",
      "CJM (Customer Journey Map)",
      "Core goals",
      "Problem statement",
      "Features prioritization",
    ],
    isHighlighted: true,
  },
  {
    number: "3",
    title: "IDEATE",
    items: [
      "Brainstorming",
      "Sketch ideas",
      "Sitemap",
      "User flows",
    ],
    isHighlighted: false,
  },
  {
    number: "4",
    title: "PROTOTYPE",
    items: [
      "Wireframes",
      "Interactive prototypes",
    ],
    isHighlighted: true,
  },
  {
    number: "5",
    title: "TESTING",
    items: [
      "Usability testing",
      "Feedback gathering",
      "Refining prototypes based on test results",
    ],
    isHighlighted: false,
  },
  {
    number: "6",
    title: "DESIGN",
    items: [
      "Moodboard",
      "Visual design",
      "Interaction design",
      "UI Kit",
      "Developer handoff",
    ],
    isHighlighted: true,
  },
];

export const UXUiProcessSection = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <h2 className={styles.title}>PROCESS</h2>

        <div className={styles.grid}>
          {uxuiData.map((step) => (
            <div
              key={step.number}
              className={`${styles.card} ${step.isHighlighted ? styles.highlighted : ""}`}
            >
              <div className={styles.numberBadge}>{step.number}</div>
              <h3 className={styles.cardTitle}>{step.title}</h3>
              <ul className={styles.list}>
                {step.items.map((item, idx) => (
                  <li key={idx} className={styles.listItem}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};