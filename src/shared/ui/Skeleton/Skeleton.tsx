import clsx from "clsx";
import s from "./Skeleton.module.scss";

interface IProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  className?: string;
}

export const Skeleton = ({ className = "", ...props }: IProps) => {
  return <div className={clsx(s.Skeleton, className)} {...props}></div>;
};
