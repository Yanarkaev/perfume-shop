import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import { Button, Input } from "../../shared/ui";
import s from "./SearchProduct.module.scss";
import clsx from "clsx";
import {
  useAppDispatch,
  useAppSelector,
} from "../../app/providers/storeProvider/hooks";
import { productListActions } from "../../pages/ProductListPage/model/slice/productListSlice";
import { getProductListSelector } from "../../pages/ProductListPage/model/selectors/product.selector";
import { SearchProductHint } from "./ui/SearchProductHint";

export const SearchProduct = () => {
  const dispatch = useAppDispatch();
  const { filters, isLoading, searchValue } = useAppSelector(
    getProductListSelector
  );

  const [inputFocus, setInputFocus] = useState(false);
  const [prevInputValue, setPrevInputValue] = useState("");
  const [prevHint, setPrevHint] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(productListActions.setSearchValue(e.target.value));
    if (e.target.value.trim().length > 0) {
      setInputFocus(true);
    } else {
      setInputFocus(false);
    }
  };

  const inputRef = useRef(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (searchValue !== prevInputValue) {
      dispatch(
        productListActions.setFilters({ ...filters, name: searchValue })
      );
      setPrevHint(searchValue);
      setPrevInputValue(searchValue);
    }
  };

  useEffect(() => {
    const hideHintPopup = (e: Event) => {
      if (inputRef.current && !inputRef.current.contains(e.target)) {
        setInputFocus(false);
      }
    };

    document.addEventListener("click", hideHintPopup);
    return () => {
      document.removeEventListener("click", hideHintPopup);
    };
  }, [dispatch]);

  return (
    <form onSubmit={handleSubmit} className={clsx(s.SearchProduct)}>
      <div className={s.inputWrapper}>
        <Input
          placeholder="Поиск"
          value={searchValue}
          onChange={handleChange}
          ref={inputRef}
        />
        <Button variant="success" disabled={isLoading}>
          Найти
        </Button>
      </div>
      <SearchProductHint
        visible={inputFocus}
        setPrevInputValue={setPrevInputValue}
        prevHint={prevHint}
        setPrevHint={setPrevHint}
      />
    </form>
  );
};
