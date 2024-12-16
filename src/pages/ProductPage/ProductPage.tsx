import { useParams } from "react-router";
import {
  Container,
  Paper,
  ProductPrice,
  Skeleton,
  Title,
} from "../../shared/ui";
import s from "./ProductPage.module.scss";
import {
  useAppDispatch,
  useAppSelector,
} from "../../app/providers/storeProvider/hooks";
import { getProductById } from "./model/selectors/productById.selector";
import { useEffect } from "react";
import { fetchProductByIdThunk } from "./model/services/fetchProductByIdThunk";
import { AddToCart } from "../../features/addToCart";

const ProductPage = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { data, isLoading } = useAppSelector(getProductById);

  useEffect(() => {
    dispatch(fetchProductByIdThunk(id || ""));
  }, [dispatch]);

  return (
    <div className={s.ProductPage}>
      <Container>
        {isLoading ? (
          <Skeleton className={s.titleSkeleton} />
        ) : (
          <Title>
            {data?.brand.name} {data?.name}
          </Title>
        )}

        <Paper className={s.productWrapper}>
          <div className={s.top}>
            {isLoading ? (
              <Skeleton className={s.imageSkeleton} />
            ) : (
              <div className={s.image}>
                <img src={data?.imageURL} alt="" />
              </div>
            )}

            <div className={s.right}>
              <p className={s.description}>
                {isLoading
                  ? Array(10)
                      .fill(1)
                      .map((_, index) => (
                        <Skeleton
                          key={index}
                          className={s.descriptionSkeleton}
                        />
                      ))
                  : data?.description +
                    ` Lorem ipsum,
                dolor sit amet consectetur adipisicing elit. Magnam voluptatem
                commodi possimus earum rerum voluptatibus quos iure quam!
                Architecto ipsum tempora error! Alias corrupti debitis eaque
                aliquid, itaque nesciunt quas. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Eum veniam illo pariatur numquam
                rerum assumenda itaque architecto deleniti optio. Esse, possimus
                autem! Aliquam itaque, rerum inventore corrupti magni ullam
                repudiandae. Lorem ipsum dolor sit, amet consectetur adipisicing
                elit. Laboriosam labore ratione consequuntur ad est obcaecati,
                voluptatem amet ipsum rem dicta consectetur reiciendis impedit.
                Odio ipsum id pariatur maxime, cumque fuga!`}
              </p>

              {isLoading ? (
                <Skeleton className={s.priceSkeleton} />
              ) : (
                data && (
                  <ProductPrice
                    className={s.price}
                    price={data?.price}
                    discount={data?.discount}
                  />
                )
              )}

              <div className={s.actions}>
                {isLoading ? (
                  <Skeleton className={s.addToCartSkeleton} />
                ) : (
                  data && <AddToCart product={data} />
                )}
              </div>
            </div>
          </div>

          <div className={s.properties}>
            <div className={s.propertiesTitle}>Характеристики</div>

            {isLoading ? (
              Array(4)
                .fill(1)
                .map((_, index) => (
                  <Skeleton key={index} className={s.propertiesSkeleton} />
                ))
            ) : (
              <div className={s.propertiesFields}>
                <p>
                  <span>Название: </span>
                  {data?.name}
                </p>
                <p>
                  <span>Бренд: </span>
                  {data?.brand.name}
                </p>
                <p>
                  <span>Семейства: </span>
                  {data?.categories.map((el) => el.name)}
                </p>
                <p>
                  <span>Цена: </span>
                  {data?.price} ₽
                </p>
              </div>
            )}
          </div>
        </Paper>
      </Container>
    </div>
  );
};

export default ProductPage;
