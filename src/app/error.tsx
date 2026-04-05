"use client";

import { useEffect } from "react";
import Image from "next/image";
import styles from "./error.module.scss";
import { Button } from "@/shared/ui/Button/Button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Critical error:", error);
  }, [error]);

  return (
    <div className={styles.pageWrapper}>
      <main className={styles.container}>
        <div className={styles.content}>
          <div className={styles.imageBox}>
            <Image
              src="/404/error-img.webp"
              alt="Error Illustration"
              width={500}
              height={500}
              priority
            />
          </div>

          <h2 className={styles.title}>Something went wrong</h2>
          <p className={styles.text}>
            We encountered an unexpected error. Don't worry, all roads lead back
            home.
          </p>

          <div className={styles.btnWrapper}>
            <button className={styles.resetBtn} onClick={() => reset()}>
              Try again
            </button>
            <Button href="/">Back to home</Button>
          </div>
        </div>
      </main>
    </div>
  );
}
