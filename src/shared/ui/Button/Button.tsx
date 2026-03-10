import Link from "next/link";
import styles from "./Button.module.scss";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: "launch" | "outline";
  className?: string;
}

export const Button = ({
  href,
  onClick,
  children,
  variant = "launch",
  className = "",
}: ButtonProps) => {
  const combinedClassName = `${styles.btn} ${styles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={combinedClassName} type="button">
      {children}
    </button>
  );
};
