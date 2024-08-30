import styles from "./Navbar.module.scss";
import { NavbarLink } from "./components/NavbarLink/NavbarLink";
import { menuLinks } from "../config/menuLinks";
import { IconFavorite } from "../../../shared/icons";
import { ReactComponent as IconCart } from "../assets/cart-icon.svg";
import { Container } from "../../../shared/ui";

export const Navbar = () => {
  return (
    <header className={styles.Navbar}>
      <Container className={styles.inner}>
        <NavbarLink to="/">LOGO</NavbarLink>
        <nav className={styles.nav}>
          {menuLinks.map(({ name, href }) => (
            <NavbarLink key={href} to={href}>
              {name}
            </NavbarLink>
          ))}
        </nav>
        <div className={styles.actions}>
          <IconCart />
          <IconFavorite />
        </div>
      </Container>
    </header>
  );
};
