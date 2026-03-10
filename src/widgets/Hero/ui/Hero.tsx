import { Button } from "@/shared/ui/Button/Button"; // Перевір шлях до своєї кнопки
import styles from "./Hero.module.scss";

export const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          <span className={styles.titleTop}>My design</span>
          <span className={styles.titleBottom}>Your level up</span>
        </h1>

        <div className={styles.btnWrapper}>
          <Button href="/Launch" className={styles.launchBtnHero}>
            Launch project
          </Button>
        </div>
      </div>
    </section>
  );
};
