import { Input, SelectTag } from "../../shared/ui";
import s from "./ProductListFilter.module.scss";

export const ProductListFilter = () => {
  return (
    <div className={s.ProductListFilter}>
      <div className={s.pricesRange}>
        <Input placeholder="От" value="" onChange={() => {}} />
        <Input placeholder="До" value="" onChange={() => {}} />
      </div>

      <div className={s.categories}>
        Категории
        <SelectTag text="Сладкие" />
        <SelectTag text="Мощные" />
        <SelectTag text="Мощные" />
        <SelectTag text="Мощные" />
        <SelectTag text="Мощные" />
        <SelectTag text="Мощные" />
        <SelectTag text="Мощные" />
        <SelectTag text="Мощные" />
        <SelectTag text="Мощные" />
        <SelectTag text="Мощные" />
        <SelectTag text="Мощные" />
      </div>

      <div className={s.actions}>
        <SelectTag text="Скидки" />
        <SelectTag text="Новинки" />
        <SelectTag text="Хиты" />
      </div>

      <div className={s.brands}>
        Бренды
        <SelectTag text="Creed" />
        <SelectTag text="Sospiro" />
        <SelectTag text="Escentric Molecules" />
      </div>
    </div>
  );
};
