import { NavLink, NavLinkProps } from "react-router-dom";
import clsx from "clsx";
import styles from "./NavbarLink.module.scss";

interface IProps extends NavLinkProps {
  children: React.ReactNode;
  className?: string;
}

export const NavbarLink: React.FC<IProps> = ({
  children,
  className = "",
  ...props
}) => {
  return (
    <NavLink
      {...props}
      className={clsx(styles.NavbarLink, className)}
    >
      {children}
    </NavLink>
  );
};
