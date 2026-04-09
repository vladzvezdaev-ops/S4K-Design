import { PortableText } from "@portabletext/react";
import { getProjectBySlug } from "@/shared/api/sanity/queries";
import Image from "next/image";
import { urlFor } from "../../../../sanity/lib/image";
import styles from "./ProjectDetail.module.scss";

const myCustomComponents = {
  types: {
    image: ({ value }: any) => {
      const sizeClass = styles[value.size] || styles.full;
      return (
        <div className={`${styles.imageContainer} ${sizeClass}`}>
          <Image
            src={urlFor(value).url()}
            alt={value.alt || "Project Image"}
            width={1200}
            height={800}
            className={styles.projectImage}
          />
        </div>
      );
    },
  },
  block: {
    h2: ({ children }: any) => <h2 className={styles.heading2}>{children}</h2>,
    normal: ({ children }: any) => (
      <p className={styles.paragraph}>{children}</p>
    ),
  },
};

export default async function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = await getProjectBySlug(params.slug);

  if (!project) return <div className={styles.notFound}>Project not found</div>;

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.mainTitle}>{project.title}</h1>
        <div className={styles.content}>
          <PortableText
            value={project.content}
            components={myCustomComponents}
          />
        </div>
      </div>
    </main>
  );
}
