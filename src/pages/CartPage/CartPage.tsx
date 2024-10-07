import s from "./CartPage.module.scss";
import { Container, Paper, Title } from "../../shared/ui";
import { CartProductCard } from "./ui/CartProductCard/CartProductCard";
import { useAppSelector } from "../../app/providers/storeProvider/hooks";
import { getCart } from "../../entities/Cart/model/selectors/cart.selector";

const CartPage = () => {
  const { data } = useAppSelector(getCart);
  return (
    <div className={s.CartPage}>
      <Container>
        <Title>Корзина</Title>

        <div className={s.wrapper}>
          <Paper className={s.products}>
            {data.map((el, i) => (
              <CartProductCard
                key={el._id + i}
                product={{ ...el, mlsLeft: 10 }}
              />
            ))}
          </Paper>
          <Paper className={s.orderBlock}>Заказать</Paper>
        </div>
      </Container>
    </div>
  );
};

export default CartPage;
