"use client";

import { ProjectCard } from "@/entities/project";
import { Project } from "@/entities/project/model/types";
import styles from "./BrandPortfolioSection.module.scss";

interface BrandPortfolioSectionProps {
  projects: Project[];
}

export const BrandPortfolioSection = ({
  projects,
}: BrandPortfolioSectionProps) => {
  const brandPart = projects.slice(0, 4);
  const uxUiPart = projects.slice(4);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.titleMobile}>BRAND IDENTITY</h2>
        <h2 className={styles.titleTablet}>BRAND PORTFOLIO</h2>

        <div className={styles.projectsGrid}>
          <div className={styles.mobileOnlyContents}>
            {brandPart.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
          <div className={styles.desktopOnlyContents}>
            {brandPart.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        </div>

        <h2 className={styles.titleMobile}>UX/UI</h2>
        <h2 className={styles.titleTablet}>UX/UI PORTFOLIO</h2>

        <div className={styles.projectsGrid}>
          <div className={styles.mobileOnlyContents}>
            {uxUiPart.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
          <div className={styles.desktopOnlyContents}>
            {uxUiPart.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
