import {
  SearchIcon,
  HomeIcon,
  UserIcon,
} from "../../../shared/icons";

export const menuLinks = [
  { name: "Главная", href: "/" },
  { name: "Парфюмерия", href: "/perfumes" },
  { name: "Отзывы", href: "/reviews" },
  { name: "Контакты", href: "/contacts" },
];

export const mobileMenuLinks = [
  { Icon: HomeIcon, href: "/" },
  { Icon: SearchIcon, href: "/perfumes" },
  { Icon: UserIcon, href: "/profile" },
];
