"use client";

import Image from "next/image";
import Link from "next/link";
import { LinkedIn } from "@/shared/ui/Icon/Network/LinkedIn";
import { Inst } from "@/shared/ui/Icon/Network/Inst";
import styles from "./ContactNav.module.scss";
import { BurgerIcon } from "@/shared/ui/Icon/BurgerIcon";

export const ContactNav: React.FC = () => {
  return (
    <section className={styles.ContactNav}>
      <div className={styles.navSection}>
        <div className={styles.contactItems}>
          <a href="mailto:slialina.design@gmail.com" className={styles.item}>
            <span>slialina.design@gmail.com</span>
            <button
              className={styles.arrowBtn}
              aria-label="Написати мені на пошту"
              type="button"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={styles.svgIcon}
              >
                <path
                  d="M16.9531 7.94L17.3166 14.5419L17.3714 15.5209L15.3347 15.6271L15.2806 14.6487L15.2806 14.6487L15.035 10.1841L8.20204 17.0003L6.83849 15.7376L13.6286 8.96423L9.13618 8.94821L8.11714 8.94481L8.1265 6.9852L9.14695 6.98858L15.9408 7.01327L16.9028 7.01705L16.9531 7.94Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </a>

          <a href="tel:+48517365658" className={styles.item}>
            <span>+(48) 517-365-658</span>
            <button
              className={styles.arrowBtn}
              aria-label="Зателефонувати мені"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={styles.svgIcon}
              >
                <path
                  d="M16.9531 7.94L17.3166 14.5419L17.3714 15.5209L15.3347 15.6271L15.2806 14.6487L15.035 10.1841L8.20204 17.0003L6.83849 15.7376L13.6286 8.96423L9.13618 8.94821L8.11714 8.94481L8.1265 6.9852L9.14695 6.98858L15.9408 7.01327L16.9028 7.01705L16.9531 7.94Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </a>
        </div>

        <div className={styles.socials}>
          <Link
            href="https://www.instagram.com/s4k.design?igsh=MWtqOWJ1MmY0cGxmMg="
            className={styles.socialIcon}
          >
            <Inst />
          </Link>
          <Link
            href="https://www.linkedin.com/in/sofiia-lialina-25120a298?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
            className={styles.socialIcon}
          >
            <LinkedIn />
          </Link>
        </div>
      </div>

      <div className={styles.imgSection}>
        <div className={styles.imageWrapper}>
          <Image
            src="/pages/HeroMobile.jpg"
            alt="Contact Me"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className={styles.photo}
          />
        </div>
      </div>
    </section>
  );
};
