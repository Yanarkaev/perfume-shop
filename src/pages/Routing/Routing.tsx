import { lazy, Suspense } from "react";
import { Route, Routes, Navigate } from "react-router";
import { Layout } from "./Layout";
import { Spinner } from "../../shared/ui";
import { Path } from "../../shared/constants/routingPaths";
import { useAppSelector } from "../../app/providers/storeProvider/hooks";
import { getCartSelector } from "../../entities/Cart/model/selectors/cart.selector";

const MainPage = lazy(() => import("../MainPage/MainPage"));
const ProductPage = lazy(() => import("../ProductPage/ProductPage"));
const ProductListPage = lazy(
  () => import("../ProductListPage/ProductListPage")
);
const CartPage = lazy(() => import("../CartPage/CartPage"));
const AboutPage = lazy(() => import("../AboutPage/AboutPage"));
const OrderPage = lazy(() => import("../OrderPage/OrderPage"));

const routeList = [
  { key: "mainPage", path: Path.MainPage, Page: MainPage },
  { key: "productPage", path: Path.Perfume, Page: ProductPage },
  { key: "productListPage", path: Path.Perfumes, Page: ProductListPage },
  { key: "cartPage", path: Path.Cart, Page: CartPage },
  { key: "about", path: Path.About, Page: AboutPage },
  { key: "order", path: Path.Order, Page: OrderPage },
];

export const Routing = () => {
  const { data } = useAppSelector(getCartSelector);

  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          {routeList.map(({ key, path, Page }) => {
            if (
              path === Path.Order &&
              (!data.cartData || !data.cartData.length)
            ) {
              return (
                <Route
                  key={key}
                  path={path}
                  element={<Navigate to={Path.Cart} />}
                />
              );
            }
            return <Route key={key} path={path} element={<Page />} />;
          })}
        </Route>
        <Route path="*" element={<Navigate to={Path.Perfumes} />} />
      </Routes>
    </Suspense>
  );
};
