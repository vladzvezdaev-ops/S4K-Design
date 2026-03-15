import { Project } from "../../model/types";
import styles from "./ProjectCars.module.scss";

interface ProjectCardProps {
  project: Project;
  className?: string;
}

export const ProjectCard = ({ project, className }: ProjectCardProps) => {
  const { title, category, imageUrl } = project;

  return (
    <article className={`${styles.card} ${className || ""}`}>
      <div className={styles.imageWrapper}>
        <img src={imageUrl} alt={title} className={styles.image} />
      </div>
      <div className={styles.info}>
        <p className={styles.category}>{category}</p>
        <h3 className={styles.title}>{title}</h3>
      </div>
    </article>
  );
};
