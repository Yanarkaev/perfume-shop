import { ChangeEvent, useEffect, useState } from "react";
import {
  useAppDispatch,
  useAppSelector,
} from "../../app/providers/storeProvider/hooks";
import { Button, Input, Paper, SelectTag } from "../../shared/ui";
import s from "./ProductListFilter.module.scss";
import { fetchBrandListThunk } from "./model/services/fetchBrandListThunk";
import { fetchCategoryListThunk } from "./model/services/fetchCategoryListThunk";
import { getBrandListSelector } from "./model/selectors/brand.selector";
import { getCategoryListSelector } from "./model/selectors/category.selector";
import { ProductListFilters } from "../../pages/ProductListPage/model/types/productListSchema";
import { Category } from "../../app/types/category";
import { Brand } from "../../app/types/brand";
import { getProductListSelector } from "../../pages/ProductListPage/model/selectors/product.selector";
import { productListActions } from "../../pages/ProductListPage/model/slice/productListSlice";

export const ProductListFilter = () => {
  const dispatch = useAppDispatch();
  const brandList = useAppSelector(getBrandListSelector);
  const categoryList = useAppSelector(getCategoryListSelector);
  const productListSelector = useAppSelector(getProductListSelector);

  const [filters, setFilters] = useState<ProductListFilters>({
    priceMax: "",
    priceMin: "",
  });

  useEffect(() => {
    dispatch(fetchBrandListThunk());
    dispatch(fetchCategoryListThunk());
  }, [dispatch]);

  const handlePriceFilter = (e: ChangeEvent<HTMLInputElement>) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value.replace(/\D+/gm, ""),
    });
  };

  const handleCategoriesFilter = ({ _id }: Category) => {
    if (filters.categoryIds?.includes(_id)) {
      const currentCategoryIds = filters.categoryIds.filter((el) => el !== _id);
      setFilters({ ...filters, categoryIds: currentCategoryIds });
    } else {
      const currentCategoryIds = [...(filters.categoryIds || []), _id];
      setFilters({ ...filters, categoryIds: currentCategoryIds });
    }
  };

  const handleBrandsFilter = ({ _id }: Brand) => {
    if (filters.brandIds?.includes(_id)) {
      const currentBrandIds = filters.brandIds.filter((el) => el !== _id);
      setFilters({ ...filters, brandIds: currentBrandIds });
    } else {
      const currentBrandIds = [...(filters.brandIds || []), _id];
      setFilters({ ...filters, brandIds: currentBrandIds });
    }
  };

  const handleSetQueryFilters = () => {
    dispatch(
      productListActions.setFilters({
        ...productListSelector.filters,
        ...filters,
        name: productListSelector.searchValue,
        priceMin: filters.priceMin || undefined,
        priceMax: filters.priceMax || undefined,
      })
    );
  };

  const countProductsOfBrands = (id: string): number | undefined => {
    return productListSelector.data?.list.filter((el) => el.brand._id === id)
      .length;
  };

  console.log(productListSelector.filters);

  // const countProductsOfCategories = (id: string): number | undefined => {
  //   return productListSelector.data?.list.filter((el) => el.categories).length
  // }

  return (
    <Paper className={s.ProductListFilter}>
      <div className={s.filterTitile}>Цена</div>
      <div className={s.pricesRange}>
        <Input
          placeholder="От"
          value={filters.priceMin}
          name="priceMin"
          onChange={handlePriceFilter}
        />
        <Input
          placeholder="До"
          value={filters.priceMax}
          name="priceMax"
          onChange={handlePriceFilter}
        />
      </div>

      <div className={s.filterTitle}>Категории</div>
      <div className={s.categories}>
        {categoryList.data?.map((el) => (
          <SelectTag
            key={el._id}
            text={el.name}
            selected={filters.categoryIds?.includes(el._id)}
            onClick={() => handleCategoriesFilter(el)}
            // counter={countProductsOfCategories(el._id)}
          />
        ))}
      </div>

      <div className={s.filterTitle}>Бренды</div>
      <div className={s.brands}>
        {brandList.data?.map((el) => (
          <SelectTag
            key={el._id}
            text={el.name}
            selected={filters.brandIds?.includes(el._id)}
            onClick={() => handleBrandsFilter(el)}
            counter={countProductsOfBrands(el._id)}
          />
        ))}
      </div>

      <Button className={s.btn} onClick={handleSetQueryFilters}>
        Поиск
      </Button>
    </Paper>
  );
};
