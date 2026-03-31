"use client";

import { useLayoutEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import styles from "./PageLoader.module.scss";

export const PageLoader = () => {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);

  useLayoutEffect(() => {
    setIsVisible(true);

    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [pathname]);

  if (!isVisible) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.spinner}>
        <Image
          className={styles.spinerIcon}
          src="/icons/spiner.svg"
          alt="Spiner"
          width={120}
          height={120}
          priority
        />
      </div>
    </div>
  );
};
