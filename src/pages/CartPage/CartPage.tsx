import s from "./CartPage.module.scss";
import { Container, Title } from "../../shared/ui";
import { useAppSelector } from "../../app/providers/storeProvider/hooks";
import { getCartSelector } from "../../entities/Cart/model/selectors/cart.selector";
import { Cart } from "../../entities/Cart/Cart";

const CartPage = () => {

  return (
    <div className={s.CartPage}>
      <Container>
        <Title>Корзина</Title>

        <Cart />
      </Container>
    </div>
  );
};

export default CartPage;
