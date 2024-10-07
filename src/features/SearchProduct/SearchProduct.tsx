import { ChangeEvent, FormEvent } from "react";
import { Button, Input } from "../../shared/ui";
import s from "./SearchProduct.module.scss";
import clsx from "clsx";
import {
  useAppDispatch,
  useAppSelector,
} from "../../app/providers/storeProvider/hooks";
import { productListActions } from "../../pages/ProductListPage/model/slice/productListSlice";
import { getProductListSelector } from "../../pages/ProductListPage/model/selectors/product.selector";

export const SearchProduct = () => {
  const dispatch = useAppDispatch();
  const { filters, isLoading, searchValue } = useAppSelector(
    getProductListSelector
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(productListActions.setSearchValue(e.target.value));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(productListActions.setFilters({ ...filters, name: searchValue }));
  };

  return (
    <form onSubmit={handleSubmit} className={clsx(s.SearchProduct)}>
      <Input placeholder="Поиск" value={searchValue} onChange={handleChange} />
      <Button variant="success" disabled={isLoading}>
        Найти
      </Button>
    </form>
  );
};
