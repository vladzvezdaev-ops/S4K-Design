import styles from "./loading.module.scss";
import Image from "next/image";

export default function Loading() {
  return (
    <div className={styles.overlay}>
      <div className={styles.spinner}>
        <Image
          src="/spiner.svg"
          alt="Spiner"
          width={120}
          height={120}
          className={styles.spinerIcon}
        />
      </div>
    </div>
  );
}
4;
