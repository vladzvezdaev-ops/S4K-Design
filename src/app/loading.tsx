import styles from "./loading.module.scss";
import Image from "next/image";

export default function Loading() {
  return (
    <div className={styles.overlay}>
      <div className={styles.spinner}>
        <Image
          src="/icons/spiner.svg"
          alt="Loading..."
          width={120}
          height={120}
          priority
          loading="eager"
          className={styles.spinerIcon}
        />
      </div>
    </div>
  );
}
4;
