"use client";

import React from "react";
import styles from "./AboutMe.module.scss";
import Image from "next/image";

interface AboutMeProps {
  title?: string;
  description?: string[];
  skills?: string[];
  stats?: string[];
  desktopImage?: string;
  mobileImage?: string;
}

export const AboutMe: React.FC<AboutMeProps> = ({
  title = "ABOUT ME",
  description = [
    "I’m a UX/UI and Brand Designer focused on creating clear, functional, and emotionally engaging digital products.",
    "I work at the intersection of strategy, visual identity, and user experience - translating complex ideas into intuitive, structured, and aesthetically balanced solutions.",
  ],
  skills = ["UX / UI design", "&", "Brand design"],
  stats = ["3+ years experience", "20+ Brand projects", "7+ UX/UI projects"],
  desktopImage = "/HeroMobile.png",
  mobileImage = "/HeadHero.png",
}) => {
  return (
    <section className={styles.AboutMe}>
      <div className={styles.AboutMeWrapper}>
        <div className={styles.textSection}>
          <h2 className={styles.desktopTitle}>{title}</h2>
          <div className={styles.textListSection}>
            <div>
              <ul className={styles.textListTop}>
                <li>
                  <Image
                    src="/AboutMeSVGleft.svg"
                    alt="Decoration"
                    width={40}
                    height={40}
                    className={styles.arrowIconLeft}
                  />
                </li>
                {skills.map((skill, index) => (
                  <li key={index}>
                    <p>{skill}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <ul className={styles.textListBottom}>
                <li>
                  <Image
                    src="/spiner.svg"
                    alt="Spinner"
                    width={80}
                    height={80}
                    className={styles.arrowIconRight}
                  />
                </li>
                {stats.map((stat, index) => (
                  <li key={index}>
                    <p>{stat}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.imgSection}>
          <div className={styles.imageContainer}>
            <h3 className={styles.mobileTitle}>{title}</h3>
            <Image
              src={desktopImage}
              alt="Designer Portrait Desktop"
              width={400}
              height={400}
              className={styles.AboutMeDesktopImage}
              priority
            />
            <Image
              src={mobileImage}
              alt="Designer Portrait Mobile"
              width={165}
              height={165}
              className={styles.AboutMeMobileImage}
              priority
            />
          </div>
          <div className={styles.textDescriptionSection}>
            {description.map((text, index) => (
              <p key={index} className={styles.textItem}>
                {text}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
