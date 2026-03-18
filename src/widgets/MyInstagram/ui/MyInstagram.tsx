"use client";

import Image from "next/image";
import { Inst } from "@/shared/ui/Icon/Network/Inst";
import styles from "./MyInstagram.module.scss";

interface MyInstagramProps {}

export const MyInstagram: React.FC<MyInstagramProps> = () => {
  return (
    <div className={styles.MyInstagram}>
      <h2 className={styles.title}>MY INSTAGRAM</h2>
      <div className={styles.imgWrapper}>
        <div className={styles.imgItem}>
          <Image
            src="/myInst/MyInstagramImg1.png"
            alt="InstImage1"
            width={170}
            height={220}
            priority
          />
        </div>
        <div className={styles.imgItem}>
          <Image
            src="/myInst/MyInstagramImg2.png"
            alt="InstImage2"
            width={170}
            height={220}
            priority
          />
        </div>
        <div className={styles.imgItem}>
          <Image
            src="/myInst/MyInstagramImg3.png"
            alt="InstImage3"
            width={170}
            height={220}
            priority
          />
        </div>
        <div className={styles.imgItem}>
          <Image
            src="/myInst/MyInstagramImg4.png"
            alt="InstImage4"
            width={170}
            height={220}
            priority
          />
        </div>
      </div>
      <div className={styles.instImage}>
        <Inst />
      </div>
    </div>
  );
};
