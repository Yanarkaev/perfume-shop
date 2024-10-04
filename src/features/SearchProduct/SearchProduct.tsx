import { ChangeEvent, FormEvent, useState } from "react";
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
  const { filters, isLoading } = useAppSelector(getProductListSelector);
  const [searchValue, setSearchValue] = useState("");

  const filterData = {
    ...filters,
    name: searchValue,
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(productListActions.setFilters(filterData));
  };

  return (
    <form onSubmit={handleSubmit} className={clsx(s.SearchProduct)}>
      <Input placeholder="Поиск" value={searchValue} onChange={handleChange} />
      <Button variant="success" disabled={isLoading}>Найти</Button>
    </form>
  );
};
