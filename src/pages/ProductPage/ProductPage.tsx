import { useParams } from "react-router";
import { Container, Paper, Title } from "../../shared/ui";
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
  const { data } = useAppSelector(getProductById);

  useEffect(() => {
    dispatch(fetchProductByIdThunk(id || ""));
  }, [dispatch]);
  return (
    <div className={s.ProductPage}>
      <Container>
        <Title>
          {data?.brand.name} / {data?.name}
        </Title>

        <Paper className={s.productWrapper}>
          <div className={s.top}>
            <div className={s.image}>
              <img src={data?.imageURL} alt="" />
            </div>

            <div className={s.right}>
              <p className={s.description}>
                {data?.description} Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Magnam voluptatem commodi possimus earum rerum
                voluptatibus quos iure quam! Architecto ipsum tempora error!
                Alias corrupti debitis eaque aliquid, itaque nesciunt quas.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                veniam illo pariatur numquam rerum assumenda itaque architecto
                deleniti optio. Esse, possimus autem! Aliquam itaque, rerum
                inventore corrupti magni ullam repudiandae. Lorem ipsum dolor
                sit, amet consectetur adipisicing elit. Laboriosam labore
                ratione consequuntur ad est obcaecati, voluptatem amet ipsum rem
                dicta consectetur reiciendis impedit. Odio ipsum id pariatur
                maxime, cumque fuga!
              </p>

              <div className={s.actions}>
                {data && <AddToCart product={data} />}
              </div>
            </div>
          </div>
        </Paper>
      </Container>
    </div>
  );
};

export default ProductPage;
