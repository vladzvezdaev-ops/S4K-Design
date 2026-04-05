import Link from "next/link";
import Image from "next/image";
import styles from "./not-found.module.scss";
import { Button } from "@/shared/ui/Button/Button";

export default function NotFound() {
  return (
    <main className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.errorCode}>404</h1>

        <div className={styles.imageWrapper}>
          <Image
            src="/404/404-illustration.webp"
            alt="Page not found"
            width={400}
            height={400}
            priority
          />
        </div>

        <h2 className={styles.title}>Oops! Page not found</h2>
        <p className={styles.text}>
          It looks like you've reached a dead end. Don't worry, all roads lead
          back home.
        </p>

        <div className={styles.btnWrapper}>
          <Button href="/">Back to home</Button>
        </div>
      </div>
    </main>
  );
}
