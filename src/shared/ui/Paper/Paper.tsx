import clsx from "clsx";
import s from "./Paper.module.scss";

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: React.ReactNode;
  type?: "div" | "section";
}

export const Paper = ({ children, className = "", type = "div" }: IProps) => {
  return type === "div" ? (
    <div className={clsx(s.Paper, className)}>{children}</div>
  ) : (
    <section className={clsx(s.Paper, className)}>{children}</section>
  );
};
