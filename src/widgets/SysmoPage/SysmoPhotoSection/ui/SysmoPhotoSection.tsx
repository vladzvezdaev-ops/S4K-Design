"use client";

import Image from "next/image";
import styles from "./SysmoPhotoSection.module.scss";

const sysmoImages = [
  { id: 1, src: "/sysmo/sysmo1.png", alt: "Sysmo overview phones" },
  { id: 2, src: "/sysmo/sysmo2.png", alt: "Sysmo phones perspective" },
  { id: 3, src: "/sysmo/sysmo3.png", alt: "Sysmo phones side view" },
  { id: 4, src: "/sysmo/sysmo4.png", alt: "Sysmo web interface" },
  { id: 5, src: "/sysmo/sysmo5.png", alt: "Sysmo features desktop" },
];

export const SysmoPhotoSection = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.mobileInfo}>
        <div className={styles.infoBlock}>
          <h3>GOAL</h3>
          <p>
            Develop a dedicated landing page for this service. The page needed
            to explain in a clear and accessible way what the system is, how it
            works, and why potential clients should choose it
          </p>
        </div>
        <div className={styles.infoBlock}>
          <h3>SCOPE OF THE WORK</h3>
          <p>UX/UI design landing page</p>
        </div>
        <div className={styles.infoBlock}>
          <h3>CLIENT</h3>
          <p>Sysmo.pl - IT solutions</p>
        </div>
      </div>

      <div className={styles.desktopOverview}>
        <h3>OVERVIEW</h3>
        <p>
          This page was created to present a new service by{" "}
          <strong>Sysmo.pl — IT Solutions</strong>: the Odoo System. The goal
          was to introduce a new project management methodology that simplifies
          processes for both employees and clients while saving time and costs.
        </p>
      </div>

      <div className={styles.grid}>
        {sysmoImages.map((image) => (
          <div key={image.id} className={styles.item}>
            <div className={styles.imageInner}>
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={image.id === 1}
                className={styles.image}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
