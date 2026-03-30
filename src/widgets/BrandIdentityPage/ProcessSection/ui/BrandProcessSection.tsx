"use client";

import styles from "./BrandProcessSection.module.scss";

const brandData = [
  {
    number: "1",
    title: "DISCOVER",
    items: [
      "Brand audit",
      "Market & cultural research",
      "Competitor positioning",
      "Audience insights",
    ],
    isHighlighted: false,
  },
  {
    number: "2",
    title: "STRATEGY",
    items: [
      "Brand positioning",
      "Value proposition",
      "Brand personality",
      "Core messaging",
    ],
    isHighlighted: true,
  },
  {
    number: "3",
    title: "CONCEPT",
    items: [
      "Creative direction",
      "Brand idea",
      "Visual & verbal territories",
    ],
    isHighlighted: false,
  },
  {
    number: "4",
    title: "IDENTITY",
    items: [
      "Logo system",
      "Color & typography",
      "Graphic elements",
      "Brand assets",
    ],
    isHighlighted: true,
  },
  {
    number: "5",
    title: "APPLICATION",
    items: [
      "Digital & print touchpoints",
      "Social & marketing visuals",
      "Brand consistency across platforms",
    ],
    isHighlighted: false,
  },
  {
    number: "6",
    title: "GUIDELINES",
    items: [
      "Brand book",
      "Usage rules",
      "Scalable design system",
      "Future-ready framework",
    ],
    isHighlighted: true,
  },
];

export const BrandProcessSection = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <h2 className={styles.title}>PROCESS</h2>

        <div className={styles.grid}>
          {brandData.map((step) => (
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