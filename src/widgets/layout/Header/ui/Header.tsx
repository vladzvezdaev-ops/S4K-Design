"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.scss";
import { Modal } from "@/shared/ui/Modal/Modal";
import { useState } from "react";
import { Button } from "@/shared/ui/Button/Button";
import { BurgerIcon } from "@/shared/ui/Icon/BurgerIcon";
import { BurgerModalIcon } from "@/shared/ui/Icon/BurgerModalIcon";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleServices = () => setIsServicesOpen(!isServicesOpen);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logoWrapper}>
          <Link href="/" className={styles.logo}>
            <Image
              src="/shared/icon.svg"
              alt="SK4 Design Logo"
              width={72}
              height={23}
              priority
            />
          </Link>
        </div>

        <div className={styles.navWrapper}>
          <Button href="/Contact">Launch project</Button>
          <nav className={styles.nav}>
            <Link href="/About">About me</Link>
            <div className={styles.desktopDropdown}>
              <Link
                href="/Services"
                className={styles.desktopDropdownTrigger}
                prefetch={false}
              >
                Services
              </Link>

              <div className={styles.desktopDropdownMenu}>
                <Link href="/Services/UX-UI" prefetch={false}>
                  UX/UI Design
                </Link>
                <Link href="/Services/Branding" prefetch={false}>
                  Brand Identity design
                </Link>
              </div>
            </div>
            <Link href="/Portfolio">Portfolio</Link>
            <Link href="/Process">Process</Link>
            <Link href="/Contact">Contact</Link>
          </nav>
        </div>
        <div onClick={toggleMenu} className={styles.burgerBtn}>
          <BurgerIcon />
        </div>
      </div>
      <Modal isOpen={isOpen} onClose={toggleMenu}>
        <div className={styles.menuHeader}>
          <Image
            src="/shared/burgerLogo.svg"
            alt="Logo"
            width={72}
            height={23}
            className={styles.logoBurger}
          />
          <button
            onClick={toggleMenu}
            className={styles.closeBtn}
            type="button"
            aria-label="Меню логотип"
          >
            <BurgerModalIcon />
          </button>
        </div>

        <nav className={styles.mobileNav}>
          <Link
            href="/About"
            onClick={toggleMenu}
            className={styles.mobileLink}
          >
            About me
          </Link>

          <div className={styles.accordion}>
            <button
              onClick={toggleServices}
              className={styles.mobileLink}
              type="button"
              aria-label="Відкрити випадаюче меню"
            >
              Services
              <Image
                src="/icons/arrow.svg"
                alt="arrow"
                width={24}
                height={24}
                className={`${styles.arrowIcon} ${isServicesOpen ? styles.arrowActive : ""}`}
              />
            </button>

            <div
              className={`${styles.accordionContent} ${isServicesOpen ? styles.active : ""}`}
            >
              <div className={styles.subLinksWrapper}>
                <Link
                  href="/Services/UX-UI"
                  onClick={toggleMenu}
                  className={styles.subLink1}
                  prefetch={false}
                >
                  UX/UI Design
                </Link>
                <Link
                  href="/Services/Branding"
                  onClick={toggleMenu}
                  className={styles.subLink2}
                  prefetch={false}
                >
                  Brand Identity design
                </Link>
              </div>
            </div>
          </div>
          <Link
            href="/Portfolio"
            onClick={toggleMenu}
            className={styles.mobileLink}
          >
            Portfolio
          </Link>
          <Link
            href="/Process"
            onClick={toggleMenu}
            className={styles.mobileLink}
          >
            Process
          </Link>
          <Link
            href="/Contact"
            onClick={toggleMenu}
            className={styles.mobileLink}
          >
            Contact
          </Link>
        </nav>
      </Modal>
    </header>
  );
};
