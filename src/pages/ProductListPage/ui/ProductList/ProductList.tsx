import { useEffect, useRef } from "react";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../app/providers/storeProvider/hooks";
import { getProductListSelector } from "../../model/selectors/product.selector";
import s from "./ProductList.module.scss";
import { fetchProductListThunk } from "../../model/services/fetchProductListThunk";
import { ProductCard } from "../../../../entities/Product/ProductCard";
import { OopsBlock, Paper, Skeleton } from "../../../../shared/ui";
import { useScrollOnBottom } from "../../../../shared/lib/hooks/useScrollOnBottom";
import { Pagination } from "../../../../features/Pagination/Pagination";
import { productListActions } from "../../model/slice/productListSlice";

export const ProductList = () => {
  const dispatch = useAppDispatch();

  const { data, filters, isLoading, pagination } = useAppSelector(
    getProductListSelector
  );

  useEffect(() => {
    dispatch(
      fetchProductListThunk({
        ...filters,
        limit: pagination.limit,
        page: pagination.page,
      })
    );
  }, [dispatch, filters]);

  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    dispatch(productListActions.setPaginationPage(1));
  }, [filters]);

  return (
    <div className={s.ProductListWrapper}>
      <Paper type="section" className={s.ProductList}>
        {isLoading ? (
          Array(12)
            .fill(1)
            .map((_, index) => (
              <Skeleton key={index} className={s.cardSkeleton} />
            ))
        ) : data?.list.length ? (
          data?.list?.map((el) => (
            <ProductCard className={s.product} key={el._id} product={el} />
          ))
        ) : (
          <OopsBlock text="Ничего не найдено" className={s.oops} />
        )}
      </Paper>
      <Pagination />
    </div>
  );
};
