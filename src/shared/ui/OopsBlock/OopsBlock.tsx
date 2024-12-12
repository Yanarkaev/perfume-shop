import { HTMLAttributes, DetailedHTMLProps } from "react";
import s from "./OopsBlock.module.scss";
import clsx from "clsx";
import { Button } from "../Button/Button";

export interface IProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  text: string;
  action?: () => void;
  actionText?: string;
  className?: string;
}

export const OopsBlock = ({
  text,
  action,
  actionText,
  className = "",
}: IProps) => {
  return (
    <div className={clsx(s.OopsBlock, className)}>
      <p className={s.sad}> : /</p>
      <p className={s.text}>{text}</p>
      {action && <Button className={s.action} onClick={action}>{actionText}</Button>}
    </div>
  );
};
