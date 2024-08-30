import clsx from "clsx";
import styles from "./Container.module.scss";

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export const Container = ({ className = "", children, ...props }: IProps) => {
  return (
    <div {...props} className={clsx(styles.Container, className)}>
      {children}
    </div>
  );
};
