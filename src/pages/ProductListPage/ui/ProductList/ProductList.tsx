import { useEffect } from "react";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../app/providers/storeProvider/hooks";
import { getProductListSelector } from "../../model/selectors/product.selector";
import s from "./ProductList.module.scss";
import { fetchProductListThunk } from "../../model/services/fetchProductListThunk";
import { ProductCard } from "../../../../entities/Product";
import { Paper } from "../../../../shared/ui";

export const ProductList = () => {
  const dispatch = useAppDispatch();
  const productList = useAppSelector(getProductListSelector);

  useEffect(() => {
    dispatch(fetchProductListThunk(productList.filters));
  }, [dispatch, productList.filters]);

  return (
    <Paper type="section" className={s.ProductList}>
      {productList.data?.list?.map((el) => (
        <ProductCard key={el._id} product={el} />
      ))}
    </Paper>
  );
};
