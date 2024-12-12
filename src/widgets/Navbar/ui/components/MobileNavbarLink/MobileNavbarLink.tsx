import { NavLink, NavLinkProps } from "react-router-dom";
import s from "./MobileNavbarLink.module.scss";
import clsx from "clsx";

interface IProps extends NavLinkProps {
  Icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
}

export const MobileNavbarLink = ({ Icon, ...props }: IProps) => {
  const currentHref = location.pathname;

  return (
    <NavLink
      {...props}
      className={clsx(s.MobileNavbarLink, {
        [s.active]: currentHref === props.to,
      })}
    >
      <Icon fill="none" className={s.icon} width={30} height={30} />
    </NavLink>
  );
};
