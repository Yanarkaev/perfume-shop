import { useEffect } from "react";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../app/providers/storeProvider/hooks";
import { getCartSelector } from "../../../../entities/Cart/model/selectors/cart.selector";
import { Button, Paper } from "../../../../shared/ui";
import s from "./OrderBlock.module.scss";
import { cartActions } from "../../../../entities/Cart/model/slice/cartSlice";
import { useNavigate } from "react-router";

export const OrderBlock = () => {
  const { totalSum, data } = useAppSelector(getCartSelector);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(cartActions.setTotalSum());
  }, [data]);

  const redirectToOrderPage = () => {
    if (data.cartData.length > 0) {
      navigate("/order");
    }
  };

  return (
    <Paper className={s.OrderBlock}>
      <div className={s.sum}>
        Итого: <span>{totalSum}₽</span>
      </div>
      <Button onClick={redirectToOrderPage}>Заказать</Button>
    </Paper>
  );
};
