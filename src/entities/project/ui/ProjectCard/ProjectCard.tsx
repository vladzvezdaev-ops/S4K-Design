import { Project } from "../../model/types";
import styles from "./ProjectCard.module.scss";
import Link from "next/link";
import Image from "next/image";

interface ProjectCardProps {
  project: Project;
  className?: string;
}

export const ProjectCard = ({ project, className }: ProjectCardProps) => {
  const { imageUrl, link = "#" } = project;

  return (
    <article className={`${styles.card} ${className || ""}`}>
      <div className={styles.imageWrapper}>
        <img src={imageUrl} className={styles.image} alt="Project" />

        <Link href={link} className={styles.linkButton}>
          <Image
            src="/icons/burgerBtnClose.svg"
            alt="Link Icon"
            width={40}
            height={40}
            className={styles.button}
          />
        </Link>
      </div>
    </article>
  );
};
