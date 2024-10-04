import { Intro } from "./ui/Intro/Intro";
import { MainPageProductsList } from "./ui/MainPageProductList/MainPageProductsList";

const MainPage = () => {
  return (
    <div>
      <Intro />
      <MainPageProductsList />
    </div>
  );
};

export default MainPage;
