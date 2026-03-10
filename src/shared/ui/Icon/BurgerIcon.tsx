import styles from "./BurgerIcon.module.scss";

export const BurgerIcon = () => {
  return (
    <button className={styles.iconWrapper} type="button">
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
  );
};
