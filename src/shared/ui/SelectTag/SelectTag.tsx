import React from "react";
import s from "./SelectTag.module.scss";
import clsx from "clsx";
// import { ReactComponent as CheckMarkIcon } from "./assets/checkmark.svg";

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  text: string;
  selected?: boolean;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

export const SelectTag = ({
  text = "",
  selected = false,
  className,
  onClick = () => {},
}: IProps) => {
  return (
    <div
      className={clsx(s.SelectTag, { [s.checked]: selected }, className)}
      onClick={onClick}
    >
      {text}
      {/* {selected && <CheckMarkIcon />} */}
    </div>
  );
};
