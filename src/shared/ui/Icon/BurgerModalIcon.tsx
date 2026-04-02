import styles from "./BurgerModalIcon.module.scss";

export const BurgerModalIcon = () => {
  return (
    <button
      className={styles.iconWrapper}
      type="button"
      aria-label="Закрити меню"
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
          d="M7.04691 16.06L6.6834 9.45815L6.62859 8.47911L8.66527 8.3729L8.71937 9.35128L8.965 13.8159L15.798 6.99972L17.1615 8.2624L10.3714 15.0358L14.8638 15.0518L15.8829 15.0552L15.8735 17.0148L14.8531 17.0114L8.05917 16.9867L7.09716 16.983L7.04691 16.06Z"
          fill="currentColor"
        />
      </svg>
    </button>
  );
};
