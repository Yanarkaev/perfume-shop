import { Container, HorizontalList, SelectTag } from "../../../../shared/ui";
import { ProductCard } from "../../../../entities/Product";
import styles from "./MainPageProductsList.module.scss";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../app/providers/storeProvider/hooks";
import { useEffect, useState } from "react";
import {
  getDiscountProductListSelector,
  getHitsProductListSelector,
  getNewsProductListSelector,
} from "../../model/selectors/mainPageProductList.selector";
import { fetchDiscountProductListThunk } from "../../model/services/fetchDiscountProductListThunk";
import { fetchHitsProductListThunk } from "../../model/services/fetchHitsProductListThunk";
import { fetchNewsProductListThunk } from "../../model/services/fetchNewsProductListThunk";
import { Title } from "../../../../shared/ui/Title/Title";

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

  const [state, setState] = useState(false);

  return (
    <Container>
      <section className={styles.productList}>
        <Title className={styles.title}>Скидки</Title>
        <SelectTag
          text="Сладкие"
          selected={state}
          onClick={() => setState((prev) => !prev)}
        />

        <HorizontalList>
          {discountProductListSelector.data?.map((item) => {
            return <ProductCard key={item._id} product={item} />;
          })}
        </HorizontalList>

        <Title className={styles.title}>Новинки</Title>

        <HorizontalList>
          {newsProductListSelector.data?.map((item) => {
            return <ProductCard key={item._id} product={item} />;
          })}
        </HorizontalList>

        <Title className={styles.title}>Хиты продаж</Title>

        <HorizontalList>
          {hitsProductListSelector.data?.map((item) => {
            return <ProductCard key={item._id} product={item} />;
          })}
        </HorizontalList>
      </section>
    </Container>
  );
};
