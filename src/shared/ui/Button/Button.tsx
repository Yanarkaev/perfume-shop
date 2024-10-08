import clsx from "clsx";
import styles from "./Button.module.scss";

interface IProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: React.ReactNode;
  className?: string;
  variant?: "success" | "warning" | "disabled" | "primary" | "outlined";
}

export const Button = ({
  children,
  className = "",
  variant = "success",
  ...props
}: IProps) => {
  return (
    <button
      className={clsx(styles.Button, className, styles[variant])}
      {...props}
    >
      {children}
    </button>
  );
};
