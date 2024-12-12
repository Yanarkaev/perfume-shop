import { Container, HorizontalList, Paper } from "../../../../shared/ui";
import { ProductCard } from "../../../../entities/Product/ProductCard";
import styles from "./MainPageProductsList.module.scss";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../app/providers/storeProvider/hooks";
import { useEffect } from "react";
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

  return (
    <Container>
      <section className={styles.productList}>
        <Title className={styles.title}>Скидки</Title>

        <Paper className={styles.section}>
          <HorizontalList>
            {discountProductListSelector.data?.map((item) => {
              return <ProductCard key={item._id} product={item} />;
            })}
            {discountProductListSelector.data?.map((item) => {
              return <ProductCard key={item._id} product={item} />;
            })}
            {discountProductListSelector.data?.map((item) => {
              return <ProductCard key={item._id} product={item} />;
            })}{" "}
            {discountProductListSelector.data?.map((item) => {
              return <ProductCard key={item._id} product={item} />;
            })}{" "}
            {discountProductListSelector.data?.map((item) => {
              return <ProductCard key={item._id} product={item} />;
            })}{" "}
            {discountProductListSelector.data?.map((item) => {
              return <ProductCard key={item._id} product={item} />;
            })}{" "}
            {discountProductListSelector.data?.map((item) => {
              return <ProductCard key={item._id} product={item} />;
            })}
          </HorizontalList>
        </Paper>

        <Title className={styles.title}>Новинки</Title>

        <Paper className={styles.section}>
          <HorizontalList>
            {newsProductListSelector.data?.map((item) => {
              return <ProductCard key={item._id} product={item} />;
            })}
          </HorizontalList>
        </Paper>

        <Title className={styles.title}>Хиты продаж</Title>

        <Paper className={styles.section}>
          <HorizontalList>
            {hitsProductListSelector.data?.map((item) => {
              return <ProductCard key={item._id} product={item} />;
            })}
            {hitsProductListSelector.data?.map((item) => {
              return <ProductCard key={item._id} product={item} />;
            })}
            {hitsProductListSelector.data?.map((item) => {
              return <ProductCard key={item._id} product={item} />;
            })}
            {hitsProductListSelector.data?.map((item) => {
              return <ProductCard key={item._id} product={item} />;
            })}
            {hitsProductListSelector.data?.map((item) => {
              return <ProductCard key={item._id} product={item} />;
            })}
          </HorizontalList>
        </Paper>
      </section>
    </Container>
  );
};
