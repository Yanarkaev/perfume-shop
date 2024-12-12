import { useEffect } from "react";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../app/providers/storeProvider/hooks";
import { getProductListSelector } from "../../model/selectors/product.selector";
import s from "./ProductList.module.scss";
import { fetchProductListThunk } from "../../model/services/fetchProductListThunk";
import { ProductCard } from "../../../../entities/Product/ProductCard";
import { Paper } from "../../../../shared/ui";

export const ProductList = () => {
  const dispatch = useAppDispatch();
  const {data, filters} = useAppSelector(getProductListSelector);

  useEffect(() => {
    dispatch(fetchProductListThunk(filters));
  }, [dispatch, filters]);

  return (
    <Paper type="section" className={s.ProductList}>
      {data?.list?.map((el) => (
        <ProductCard className={s.product} key={el._id} product={el} />
      ))}
    </Paper>
  );
};
