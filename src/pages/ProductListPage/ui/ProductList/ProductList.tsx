import { useEffect } from "react";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../app/providers/storeProvider/hooks";
import { getProductListSelector } from "../../model/selectors/product.selector";
import s from "./ProductList.module.scss";
import { fetchProductListThunk } from "../../model/services/fetchProductListThunk";
import { ProductCard } from "../../../../entities/Product/ProductCard";
import { OopsBlock, Paper, Skeleton } from "../../../../shared/ui";

export const ProductList = () => {
  const dispatch = useAppDispatch();
  const { data, filters, isLoading } = useAppSelector(getProductListSelector);

  useEffect(() => {
    dispatch(fetchProductListThunk(filters));
  }, [dispatch, filters]);

  // return data?.list?.length ? (
  //   <Paper type="section" className={s.ProductList}>
  //     {data?.list?.map((el) => (
  //       <ProductCard className={s.product} key={el._id} product={el} />
  //     ))}
  //   </Paper>
  // ) : (
  //   <OopsBlock text="Ничего не найдено" className={s.oops} />
  // );

  return (
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
  );
};
