import { ProductsList } from "../../../widgets/ProductsList";
import { Intro } from "./components/Intro/Intro";

export const MainPage = () => {
  return (
    <div>
      <Intro />
      <ProductsList />
    </div>
  );
};
