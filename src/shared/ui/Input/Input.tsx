import clsx from "clsx";
import React, { ChangeEvent, DetailedHTMLProps, forwardRef } from "react";
import s from "./Input.module.scss";

interface IProps
  extends DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  value?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  variant?: "default" | "outlined";
}

export const Input = forwardRef<HTMLInputElement, IProps>(
  (
    { value, onChange, onFocus, onBlur, className = "", variant = "outlined", ...props },
    ref
  ) => {
    return (
      <input
        ref={ref} // Добавляем поддержку ref
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        className={clsx(s.Input, s[variant], className)}
        {...props}
      />
    );
  }
);
