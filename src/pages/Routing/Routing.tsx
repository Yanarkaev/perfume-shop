import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router";
import { Layout } from "./Layout";

const MainPage = lazy(() => import("../MainPage/MainPage"));
const ProductPage = lazy(() => import("../ProductPage/ProductPage"));
const ProductListPage = lazy(
  () => import("../ProductListPage/ProductListPage")
);
const CartPage = lazy(() => import("../CartPage/CartPage"));
const AboutPage = lazy(() => import("../AboutPage/AboutPage"));

enum Path {
  MainPage = "/",
  Perfumes = "/perfumes",
  Perfume = "perfumes/:id",
  Reviews = "/reviews",
  Contacts = "/contacts",
  About = "/about",
  Cart = "/cart",
}

const routeList = [
  { key: "mainPage", path: Path.MainPage, Page: MainPage },
  { key: "productPage", path: Path.Perfume, Page: ProductPage },
  { key: "productListPage", path: Path.Perfumes, Page: ProductListPage },
  { key: "cartPage", path: Path.Cart, Page: CartPage },
  { key: "about", path: Path.About, Page: AboutPage },
];

export const Routing = () => {
  return (
    <Suspense fallback={<h3>Loading...</h3>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          {routeList.map(({ key, path, Page }) => (
            <Route key={key} path={path} element={<Page />} />
          ))}
        </Route>
      </Routes>
    </Suspense>
  );
};
