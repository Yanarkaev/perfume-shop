import { Path } from "../../../shared/constants/routingPaths";
import { SearchIcon, HomeIcon, UserIcon } from "../../../shared/icons";

export const menuLinks = [
  { name: "Главная", href: Path.MainPage },
  { name: "Парфюмерия", href: Path.Perfumes },
  { name: "Отзывы", href: Path.MainPage },
  { name: "Контакты", href: Path.MainPage },
];

export const mobileMenuLinks = [
  { Icon: HomeIcon, href: "/" },
  { Icon: SearchIcon, href: Path.Perfumes },
  { Icon: UserIcon, href: Path.Reviews },
];
