import { OrderForm } from "../../features/OrderForm/OrderForm";
import s from "./OrderPage.module.scss";
import { Container, Paper, Title } from "../../shared/ui";
import { useAppSelector } from "../../app/providers/storeProvider/hooks";
import { getCartSelector } from "../../entities/Cart/model/selectors/cart.selector";
import { useNavigate } from "react-router";
import { useLayoutEffect } from "react";

export default function OrderPage() {
  const { data, totalSum } = useAppSelector(getCartSelector);

  const navigate = useNavigate();
  useLayoutEffect(() => {
    if (data.cartData.length <= 0) {
      navigate(-1);
    }
  }, []);

  return (
    <div className={s.OrderPage}>
      <Container>
        <Title>Оформление заказа</Title>
        <Paper className={s.orderForm}>
          <OrderForm />
          {/* <div>Итого: {totalSum} ₽</div> */}
        </Paper>
      </Container>
    </div>
  );
}
