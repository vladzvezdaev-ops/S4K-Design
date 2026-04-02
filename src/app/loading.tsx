import styles from "./loading.module.scss";

export default function Loading() {
  return (
    <div className={styles.overlay}>
      <div className={styles.spinner}>
        <svg
          viewBox="0 0 270 264"
          className={styles.spinerIcon}
          xmlns="http://www.w3.org/2000/svg"
          width="120"
          height="120"
        >
          <g
            fill="none"
            stroke="currentColor"
            strokeMiterlimit="10"
            strokeWidth="15.42"
          >
            <line x1="134.83" y1="88.32" x2="134.83" y2="174.92" />
            <line x1="178.13" y1="131.62" x2="91.53" y2="131.62" />
            <line x1="165.45" y1="162.24" x2="104.21" y2="101" />
            <line x1="104.21" y1="162.24" x2="165.45" y2="101" />
          </g>
        </svg>
      </div>
    </div>
  );
}
