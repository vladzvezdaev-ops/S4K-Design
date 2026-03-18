import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.scss";
import { LinkedIn } from "@/shared/ui/Icon/Network/LinkedIn";
import { Inst } from "@/shared/ui/Icon/Network/Inst";
import { FadeIn } from "@/shared/ui/fade-in/FadeIn";

export const Footer = () => {
  return (
    <FadeIn once={false}>
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.column}>
            <h3 className={styles.title}>PAGES</h3>
            <nav className={styles.nav}>
              <Link href="/">Home</Link>
              <Link href="/services">UX/UI</Link>
              <Link href="/design">Brand design</Link>
              <Link href="/portfolio">Portfolio</Link>
              <Link href="/about">About me</Link>
              <Link href="/process">Process</Link>
              <Link href="/contact">Contact</Link>
            </nav>
          </div>

          <div className={styles.column}>
            <h3 className={styles.title}>CONTACT</h3>
            <div className={styles.contacts}>
              <a href="tel:+48517365658" className={styles.contactItem}>
                <span className={styles.icon}>
                  <Image src="/phone.svg" alt="phone" width={30} height={30} />
                </span>
                <span>+(48) 517 365 658</span>
              </a>
              <a
                href="mailto:slialina.design@gmail.com"
                className={styles.contactItem}
              >
                <span className={styles.icon}>
                  <Image src="/mail.svg" alt="email" width={30} height={20} />
                </span>
                <span>slialina.design@gmail.com</span>
              </a>
            </div>
          </div>

          <div className={styles.columnNav}>
            <h3 className={styles.title}>SOCIAL MEDIA</h3>
            <div className={styles.socials}>
              <Link
                href="https://www.instagram.com/s4k.design?igsh=MWtqOWJ1MmY0cGxmMg="
                target="_blank"
                className={styles.socialCircle}
              >
                <Inst />
              </Link>
              <Link
                href="https://www.linkedin.com/in/sofiia-lialina-25120a298?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
                target="_blank"
                className={styles.socialCircle}
              >
                <LinkedIn />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </FadeIn>
  );
};
