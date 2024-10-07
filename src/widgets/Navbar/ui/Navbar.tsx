import styles from "./Navbar.module.scss";
import { NavbarLink } from "./components/NavbarLink/NavbarLink";
import { menuLinks } from "../config/menuLinks";
import { IconFavorite } from "../../../shared/icons";
import { ReactComponent as IconCart } from "../assets/cart-icon.svg";
import { Container } from "../../../shared/ui";
import { useNavigate } from "react-router";
import { CartCounter } from "./components/CartCounter/CartCounter";

export const Navbar = () => {
  const navigate = useNavigate();

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
          <div className={styles.cartIcon}>
            <CartCounter />
            <IconCart onClick={() => navigate("/cart")} />
          </div>
          <IconFavorite />
        </div>
      </Container>
    </header>
  );
};
