import { MainPageProductsList } from "../../widgets/MainPageProductList";
import { Intro } from "./ui/Intro/Intro";

const MainPage = () => {
  return (
    <div>
      <Intro />
      <MainPageProductsList />
    </div>
  );
};

export default MainPage;
