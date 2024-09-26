import clsx from "clsx";
import React from "react";
import s from "./Title.module.scss";

interface IProps extends React.HTMLAttributes<HTMLHeadingElement> {
  className?: string;
  variant?: "small" | "medium" | "large";
}

export const Title = ({
  children,
  className = "",
  variant = "medium",
  ...props
}: IProps) => {
  return (
    <h3 className={clsx(s.Title,className, s[variant] )} {...props}>
      {children}
    </h3>
  );
};
