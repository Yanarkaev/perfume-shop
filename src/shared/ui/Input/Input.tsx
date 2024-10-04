import clsx from "clsx";
import React, { ChangeEvent, DetailedHTMLProps } from "react";
import s from "./Input.module.scss";

interface IProps
  extends DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  variant?: "default";
}

export const Input = ({
  value,
  onChange,
  className = "",
  variant = "default",
  ...props
}: IProps) => {
  return (
    <input
      value={value}
      onChange={onChange}
      className={clsx(s.Input, s[variant], className)}
      {...props}
    />
  );
};
