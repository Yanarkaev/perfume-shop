import { useEffect, useState } from "react";
import s from "./SearchProductHint.module.scss";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../app/providers/storeProvider/hooks";
import { getProductListSelector } from "../../../pages/ProductListPage/model/selectors/product.selector";
import { getBrandListSelector } from "../../../entities/Brand/model/selectors/brand.selector";
import { getProductNamesSelector } from "../model/selector/searchProduct.selector";
import { fetchProductNamesThunk } from "../model/services/fetchProductNames";
import { Paper } from "../../../shared/ui";
import { productListActions } from "../../../pages/ProductListPage/model/slice/productListSlice";

export const SearchProductHint = ({ visible }: { visible: boolean }) => {
  const dispatch = useAppDispatch();
  const { filters, searchValue } = useAppSelector(getProductListSelector);

  const productNames = useAppSelector(getProductNamesSelector);
  const brandsList = useAppSelector(getBrandListSelector);
  const [hintData, setHintData] = useState<string[]>([]);
  const [allHints, setAllHints] = useState<string[]>([]);

  useEffect(() => {
    dispatch(fetchProductNamesThunk());
  }, [dispatch]);

  useEffect(() => {
    let initialData: string[] = [];

    if (Array.isArray(productNames.data)) {
      initialData = [...initialData, ...productNames.data];
    }

    if (Array.isArray(brandsList.data)) {
      initialData = [...initialData, ...brandsList.data.map((el) => el.name)];
    }

    setAllHints(initialData);
    setHintData(initialData);
  }, [productNames, brandsList]);

  useEffect(() => {
    if (searchValue) {
      setHintData(
        allHints.filter((el) =>
          el.toLowerCase().includes(searchValue.toLowerCase())
        )
      );
    } else {
      setHintData(allHints);
    }
  }, [searchValue, allHints]);

  const applyHint = (el: string) => {
    dispatch(productListActions.setSearchValue(el));
    dispatch(productListActions.setFilters({ ...filters, name: el }));
  };

  return (
    visible && (
      <Paper className={s.SearchProductHint}>
        {hintData.length ? hintData?.map((el) => (
          <div key={el} className={s.hint} onClick={() => applyHint(el)}>
            {el}
          </div>
        )): <div className={s.notFound}>Ничего не найдено</div>}
      </Paper>
    )
  );
};
