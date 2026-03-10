import styles from "./Inst.module.scss";

export const Inst = () => {
  return (
    <button className={styles.iconWrapper} type="button">
      <svg
        width="60"
        height="60"
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="17.5"
          y="17.5"
          width="25"
          height="25"
          rx="8.5"
          stroke="currentColor"
          strokeWidth="2.5"
        />
        <circle
          cx="29.8516"
          cy="29.8516"
          r="5.5"
          stroke="currentColor"
          strokeWidth="2.5"
        />
        <circle cx="36.0176" cy="22.1436" r="1.5" fill="currentColor" />
      </svg>
    </button>
  );
};
