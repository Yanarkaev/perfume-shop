import clsx from "clsx";
import styles from "./Button.module.scss";
import { memo } from "react";

interface IProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: React.ReactNode;
  className?: string;
  variant?: "success" | "warning" | "disabled" | "primary" | "outlined";
}

export const Button = memo(
  ({ children, className = "", variant = "primary", ...props }: IProps) => {
    return (
      <button
        className={clsx(styles.Button, styles[variant], className, )}
        {...props}
      >
        {children}
      </button>
    );
  }
);
