import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.scss";
import { LinkedIn } from "@/shared/ui/Icon/Network/LinkedIn";
import { TransitionOverlay } from "@/shared/ui/TransitionOverlay/TransitionOverlay";
import { Inst } from "@/shared/ui/Icon/Network/Inst";
import { FadeIn } from "@/shared/ui/Fade-in/FadeIn";

export const Footer = () => {
  return (
    <FadeIn once={true}>
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.column}>
            <h3 className={styles.title}>PAGES</h3>
            <nav className={styles.nav}>
              <Link href="/">Home</Link>
              <Link href="/Services/UX-UI">UX/UI</Link>
              <Link href="/Services/Branding">Brand design</Link>
              <Link href="/Portfolio">Portfolio</Link>
              <Link href="/About">About me</Link>
              <Link href="/Process">Process</Link>
              <Link href="/Contact">Contact</Link>
            </nav>
          </div>

          <div className={styles.column}>
            <h3 className={styles.title}>CONTACT</h3>
            <div className={styles.contacts}>
              <a href="tel:+48517365658" className={styles.contactItem}>
                <span className={styles.icon}>
                  <Image
                    src="/icons/phone.svg"
                    alt="phone"
                    width={30}
                    height={30}
                  />
                </span>
                <span>+(48) 517 365 658</span>
              </a>
              <a
                href="mailto:slialina.design@gmail.com"
                className={styles.contactItem}
              >
                <span className={styles.icon}>
                  <Image
                    src="/icons/mail.svg"
                    alt="email"
                    width={30}
                    height={20}
                  />
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
          <div className={styles.signature}>
            Developed by
            <TransitionOverlay href="/Vladyslav-zvezdaiev">
              <span className={styles.name} data-text="Vladyslav Zvezdaiev">
                Vladyslav Zvezdaiev
              </span>
            </TransitionOverlay>
          </div>
        </div>
      </footer>
    </FadeIn>
  );
};
