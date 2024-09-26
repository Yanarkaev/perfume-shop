import { Container, HorizontalList } from "../../../shared/ui";
import { ProductCard } from "../../../entities/Product";
import styles from "./MainPageProductsList.module.scss";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../app/providers/storeProvider/hooks";
import { useEffect } from "react";
import {
  getDiscountProductListSelector,
  getHitsProductListSelector,
  getNewsProductListSelector,
} from "../model/selectors/mainPageProductList.selector";
import { fetchDiscountProductListThunk } from "../model/services/fetchDiscountProductListThunk";
import { fetchHitsProductListThunk } from "../model/services/fetchHitsProductListThunk";
import { fetchNewsProductListThunk } from "../model/services/fetchNewsProductListThunk";
import { Title } from "../../../shared/ui/Title/Title";

export const MainPageProductsList = () => {
  const dispatch = useAppDispatch();
  const discountProductListSelector = useAppSelector(
    getDiscountProductListSelector
  );
  const newsProductListSelector = useAppSelector(getNewsProductListSelector);
  const hitsProductListSelector = useAppSelector(getHitsProductListSelector);

  useEffect(() => {
    dispatch(fetchDiscountProductListThunk());
    dispatch(fetchHitsProductListThunk());
    dispatch(fetchNewsProductListThunk());
  }, [dispatch]);

  console.log(discountProductListSelector)

  return (
    <Container>
      <section className={styles.productList}>
        <Title className={styles.title}>Скидки</Title>

        <HorizontalList>
          {discountProductListSelector.data?.map((item) => {
            return (
              <ProductCard
                key={item._id}
                img={item.imageURL || ""}
                brand={item.brand.name}
                name={item.name}
                price={item.price}
                discount={item.discount}
                is_hit={item.is_hit}
                is_new={item.is_new}
              />
            );
          })}
        </HorizontalList>

        <Title className={styles.title}>Новинки</Title>

        <HorizontalList>
          {newsProductListSelector.data?.map((item) => {
            return (
              <ProductCard
                key={item._id}
                img={item.imageURL || ""}
                brand={item.brand.name}
                name={item.name}
                price={item.price}
                discount={item.discount}
                is_hit={item.is_hit}
                is_new={item.is_new}
              />
            );
          })}
        </HorizontalList>

        <Title className={styles.title}>Хиты продаж</Title>

        <HorizontalList>
          {hitsProductListSelector.data?.map((item) => {
            return (
              <ProductCard
                key={item._id}
                img={item.imageURL || ""}
                brand={item.brand.name}
                name={item.name}
                price={item.price}
                discount={item.discount}
                is_hit={item.is_hit}
                is_new={item.is_new}
              />
            );
          })}
        </HorizontalList>
      </section>
    </Container>
  );
};
