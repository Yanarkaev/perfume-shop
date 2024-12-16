import styles from "./Navbar.module.scss";
import { NavbarLink } from "./components/NavbarLink/NavbarLink";
import { menuLinks, mobileMenuLinks } from "../config/menuLinks";
// import { ReactComponent as IconCart } from "../assets/cart-icon.svg";
import { Container } from "../../../shared/ui";
import { useNavigate } from "react-router";
import { CartCounter } from "./components/CartCounter/CartCounter";
import { CartIcon } from "../../../shared/icons";
// import { NavLink } from "react-router-dom";
import { MobileNavbarLink } from "./components/MobileNavbarLink/MobileNavbarLink";

export const Navbar = () => {
  const navigate = useNavigate();

  return (
    <header className={styles.Navbar}>
      <Container className={styles.inner}>
        <div className={styles.wideNavbar}>
          <NavbarLink to="/">LOGO</NavbarLink>
          <nav className={styles.nav}>
            {menuLinks.map(({ name, href }, index) => (
              <NavbarLink key={href + index} to={href}>
                {name}
              </NavbarLink>
            ))}
          </nav>
          <div className={styles.actions}>
            <div className={styles.cartIcon} onClick={() => navigate("/cart")}>
              <CartCounter />
              <CartIcon fill="none" width={30} height={30} />
            </div>
            {/* <IconFavorite /> */}
          </div>
        </div>
        <div className={styles.mobileNavbar}>
          <nav className={styles.mobileNavbarInner}>
            {mobileMenuLinks.map(({ Icon, href }, index) => (
              <MobileNavbarLink Icon={Icon} to={href} key={index} />
            ))}

            {/* TODO Fix CartCounter */}

            {/* <div className={styles.mobileNavbarCartIcon}>
              <CartCounter /> */}
            <MobileNavbarLink Icon={CartIcon} to={"/cart"} />
            {/* </div> */}
          </nav>
        </div>
      </Container>
    </header>
  );
};
