import { Navbar } from "../../widgets/Navbar";
import { Outlet } from "react-router";
import { Footer } from "../../widgets/Footer/Footer";
import s from "./Layout.module.scss";

export const Layout = () => {
  return (
    <div className={s.Layout}>
      <Navbar />
      <main className={s.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
