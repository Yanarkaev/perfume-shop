import clsx from "clsx";
import s from "./HorizontalList.module.scss";

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export const HorizontalList = ({
  className = "",
  children,
  ...props
}: IProps) => {
  return (
    <div className={clsx(s.HorizontalList, className)} {...props}>
      {children}
    </div>
  );
};
