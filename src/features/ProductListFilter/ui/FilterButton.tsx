import clsx from "clsx";
import { FilterIcon } from "../../../shared/icons";
import { Button } from "../../../shared/ui";
import s from "./FilterButton.module.scss";

interface IProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  className?: string;
  active: boolean;
}

export const FilterButton = ({ onClick, active }: IProps) => {
  return (
    <Button variant="primary" className={s.FilterButton} onClick={onClick}>
      Фильтры
      <span className={clsx({[s.active]: active})}></span>
    </Button>
  );
};
