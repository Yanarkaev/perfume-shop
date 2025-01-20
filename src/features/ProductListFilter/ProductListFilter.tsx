import { ChangeEvent, useEffect, useState } from "react";
import {
  useAppDispatch,
  useAppSelector,
} from "../../app/providers/storeProvider/hooks";
import { Button, Input, Paper, SelectTag, Skeleton } from "../../shared/ui";
import s from "./ProductListFilter.module.scss";
import { ProductListFilters } from "../../pages/ProductListPage/model/types/productListSchema";
import { Category } from "../../app/types/category";
import { Brand } from "../../app/types/brand";
import { getProductListSelector } from "../../pages/ProductListPage/model/selectors/product.selector";
import { productListActions } from "../../pages/ProductListPage/model/slice/productListSlice";
import { getBrandListSelector } from "../../entities/Brand/model/selectors/brand.selector";
import { getCategoryListSelector } from "../../entities/Category/model/selectors/category.selector";
import { fetchBrandListThunk } from "../../entities/Brand/model/services/fetchBrandListThunk";
import { fetchCategoryListThunk } from "../../entities/Category/model/services/fetchCategoryListThunk";
import { FilterButton } from "./ui/FilterButton";
import clsx from "clsx";

export const ProductListFilter = () => {
  const dispatch = useAppDispatch();
  const brandList = useAppSelector(getBrandListSelector);
  const categoryList = useAppSelector(getCategoryListSelector);
  const productListSelector = useAppSelector(getProductListSelector);

  const [filters, setFilters] = useState<ProductListFilters>({
    priceMax: "",
    priceMin: "",
    limit: 3,
    page: 1,
  });
  // const [cashFilters, setCashFilters] = useState('')

  console.log(filters);

  const [showFilter, setShowFilter] = useState(false);

  useEffect(() => {
    const savedFilters = JSON.parse(localStorage.getItem("filters") || "{}");
    dispatch(fetchBrandListThunk());
    dispatch(fetchCategoryListThunk());

    if (savedFilters) {
      setFilters(savedFilters);
    }
  }, [dispatch]);

  useEffect(() => {
    const bodyElement = document.body;
    if (showFilter) {
      bodyElement.classList.add("unscrollable");
    } else {
      bodyElement.classList.remove("unscrollable");
    }
  }, [showFilter]);

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
    const currentFilters = JSON.stringify(filters);
    const cashedFilters = localStorage.getItem("filters");

    if (currentFilters !== cashedFilters) {
      dispatch(
        productListActions.setFilters({
          ...productListSelector.filters,
          ...filters,
          name: productListSelector.searchValue,
          priceMin: filters.priceMin || undefined,
          priceMax: filters.priceMax || undefined,
          limit: filters.limit,
          page: filters.page,
        })
      );
    }

    localStorage.setItem("filters", JSON.stringify(filters));

    if (showFilter) {
      setShowFilter(false);
    }
  };

  const handleResetFilters = () => {
    setFilters({
      name: "",
      categoryIds: [],
      brandIds: [],
      priceMax: "",
      priceMin: "",
    });
  };

  const isFilters = () => {
    for (const key in filters) {
      if (filters[key]?.length > 0) {
        return true;
      }
    }

    return false;
  };

  return (
    <>
      <div
        className={clsx(s.backdrop, { [s.showBackdrop]: showFilter })}
        onClick={() => setShowFilter(false)}
      ></div>

      <>
        <Paper
          className={clsx(s.ProductListFilter, {
            [s.showFilter]: showFilter,
          })}
        >
          {brandList.isLoading || categoryList.isLoading ? (
            <Skeleton className={s.filterSkeleton} />
          ) : (
            <>
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

              <div className={s.filterTitle}>Семейства</div>
              <div className={s.categories}>
                {categoryList.data?.map((el) => (
                  <SelectTag
                    key={el._id}
                    text={el.name}
                    selected={filters.categoryIds?.includes(el._id)}
                    onClick={() => handleCategoriesFilter(el)}
                    counter={el.total}
                  />
                ))}
                {categoryList.data?.map((el) => (
                  <SelectTag
                    key={el._id}
                    text={el.name}
                    selected={filters.categoryIds?.includes(el._id)}
                    onClick={() => handleCategoriesFilter(el)}
                    counter={el.total}
                  />
                ))}
                {categoryList.data?.map((el) => (
                  <SelectTag
                    key={el._id}
                    text={el.name}
                    selected={filters.categoryIds?.includes(el._id)}
                    onClick={() => handleCategoriesFilter(el)}
                    counter={el.total}
                  />
                ))}
                {categoryList.data?.map((el) => (
                  <SelectTag
                    key={el._id}
                    text={el.name}
                    selected={filters.categoryIds?.includes(el._id)}
                    onClick={() => handleCategoriesFilter(el)}
                    counter={el.total}
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
                    counter={el.total}
                  />
                ))}
                {brandList.data?.map((el) => (
                  <SelectTag
                    key={el._id}
                    text={el.name}
                    selected={filters.brandIds?.includes(el._id)}
                    onClick={() => handleBrandsFilter(el)}
                    counter={el.total}
                  />
                ))}
                {brandList.data?.map((el) => (
                  <SelectTag
                    key={el._id}
                    text={el.name}
                    selected={filters.brandIds?.includes(el._id)}
                    onClick={() => handleBrandsFilter(el)}
                    counter={el.total}
                  />
                ))}
              </div>

              <div className={clsx(s.btns, { [s.swichedBtns]: isFilters() })}>
                <Button
                  className={clsx(s.btn, s.resetBtn)}
                  onClick={handleResetFilters}
                >
                  Сбросить
                </Button>
                <Button
                  className={clsx(s.btn, s.showBtn)}
                  onClick={handleSetQueryFilters}
                >
                  Показать
                </Button>
              </div>
            </>
          )}
        </Paper>

        <FilterButton
          active={isFilters()}
          onClick={() => setShowFilter((prev) => !prev)}
        />
      </>
    </>
  );
};
