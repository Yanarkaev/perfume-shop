import { useEffect } from "react";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../app/providers/storeProvider/hooks";
import { getProductListSelector } from "../../model/selectors/product.selector";
import s from "./ProductList.module.scss";
import { fetchProductListThunk } from "../../model/services/fetchProductListThunk";
import { ProductCard } from "../../../../entities/Product";

export const ProductList = () => {
  const dispatch = useAppDispatch();
  const productList = useAppSelector(getProductListSelector);

  useEffect(() => {
    dispatch(fetchProductListThunk(productList.filters));
  }, [dispatch, productList.filters]);

  return (
    <section className={s.ProductList}>
      {productList.data?.list?.map(
        ({ imageURL, brand, name, price, discount, is_hit, is_new, _id }) => (
          <ProductCard
            key={_id}
            img={imageURL}
            brand={brand.name}
            name={name}
            price={price}
            discount={discount}
            is_hit={is_hit}
            is_new={is_new}
          />
        )
      )}
    </section>
  );
};
