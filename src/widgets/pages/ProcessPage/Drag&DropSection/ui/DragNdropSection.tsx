"use client";
import { useRef, useState, useEffect } from "react";
import styles from "./DragNdropSection.module.scss";
import { motion } from "framer-motion";
import Image from "next/image";

const CARDS = [
  { id: 1, src: "/Drag&DropCard/1dragndrop.png", className: styles.card1 },
  { id: 2, src: "/Drag&DropCard/2dragndrop.png", className: styles.card2 },
  { id: 3, src: "/Drag&DropCard/3dragndrop.png", className: styles.card3 },
  { id: 4, src: "/Drag&DropCard/4dragndrop.png", className: styles.card4 },
  { id: 5, src: "/Drag&DropCard/5dragndrop.png", className: styles.card5 },
];

export const DragNdropSection = () => {
  const constraintsRef = useRef<HTMLDivElement>(null);

  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 150);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={styles.container}>
      <div className={styles.content} ref={constraintsRef}>
        <div className={styles.textColumn}>
          <div className={styles.paragraph}>
            <p>
              In my work, I apply structured design methodologies and strategic
              frameworks to guide each project from idea to execution.
            </p>
          </div>
          <div className={styles.paragraph}>
            <p>
              Design is not just about how it looks – it’s about how it
              functions, communicates, and supports business growth.
            </p>
          </div>
          <div className={styles.paragraph}>
            <p>
              This approach helps maintain focus, align decisions with clear
              goals, and ensures that design works not only visually, but also
              through strong internal logic and systems.
            </p>
          </div>
        </div>

        {isReady &&
          CARDS.map((card) => (
            <motion.div
              key={card.id}
              drag
              dragConstraints={constraintsRef}
              dragMomentum={true}
              dragTransition={{
                power: 0.2,
                timeConstant: 500,
              }}
              dragElastic={0.1}
              whileDrag={{
                scale: 1.1,
                zIndex: 100,
              }}
              style={{ touchAction: "none" }}
              className={`${styles.card} ${card.className}`}
            >
              <div className={styles.iceEffect}>
                <div className={styles.imageContainer}>
                  <Image
                    src={card.src}
                    alt="Portfolio Item"
                    fill
                    sizes="(max-width: 768px) 90px, 180px"
                    className={styles.img}
                    draggable={false}
                    priority
                  />
                </div>
              </div>
            </motion.div>
          ))}
      </div>
    </section>
  );
};
