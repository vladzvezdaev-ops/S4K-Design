"use client";

import Image from "next/image";
import Link from "next/link";
import { LinkedIn } from "@/shared/ui/Icon/Network/LinkedIn";
import { Inst } from "@/shared/ui/Icon/Network/Inst";
import styles from "./ContactNav.module.scss";

export const ContactNav: React.FC = () => {
  return (
    <section className={styles.ContactNav}>
      <div className={styles.navSection}>
        <div className={styles.contactItems}>
          
          <a href="mailto:slialina.design@gmail.com" className={styles.item}>
            <span>slialina.design@gmail.com</span>
            <div className={styles.arrowBtn}>
              <Image src="/burgerBtn.svg" alt="arrow" width={40} height={40} />
            </div>
          </a>

          <a href="tel:+48517365658" className={styles.item}>
            <span>+(48) 517-365-658</span>
            <div className={styles.arrowBtn}>
              <Image src="/burgerBtn.svg" alt="arrow" width={40} height={40} />
            </div>
          </a>
        </div>

        <div className={styles.socials}>
          <Link href="#" className={styles.socialIcon}><Inst /></Link>
          <Link href="#" className={styles.socialIcon}><LinkedIn /></Link>
        </div>
      </div>

      <div className={styles.imgSection}>
        <div className={styles.imageWrapper}>
          <Image
            src="/ContactMePhoto.png"
            alt="Contact Me"
            fill
            className={styles.photo}
          />
        </div>
      </div>
    </section>
  );
};