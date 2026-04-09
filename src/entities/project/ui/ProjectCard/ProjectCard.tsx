import { Project } from "../../model/types";
import styles from "./ProjectCard.module.scss";
import Link from "next/link";
import Image from "next/image";

interface ProjectCardProps {
  project: Project;
  className?: string;
}

export const ProjectCard = ({ project, className }: ProjectCardProps) => {
  const { imageUrl, link, slug, title } = project;

  let finalHref = "#";

  if (link) {
    finalHref = link;
  } else if (slug) {
    finalHref =
      slug === "sysmo" || slug === "Sysmo" ? `/${slug}` : `/projects/${slug}`;
  }

  return (
    <article className={`${styles.card} ${className || ""}`}>
      <div className={styles.imageWrapper}>
        <Image
          src={imageUrl}
          alt={title || "Project preview"}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
          quality={75}
          className={styles.image}
        />
        <Link href={finalHref} className={styles.linkButton}>
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
