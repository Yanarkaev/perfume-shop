import {
  useAppDispatch,
  useAppSelector,
} from "../../../app/providers/storeProvider/hooks";
import { getCartSelector } from "../../../entities/Cart/model/selectors/cart.selector";
import { Button } from "../../../shared/ui";
import { AddToCartProps } from "../model/types/addToCartShema";
import { cartActions } from "../../../entities/Cart/model/slice/cartSlice";

import styles from "./AddToCart.module.scss";
import clsx from "clsx";
import { orderActions } from "../../../entities/Order/model/slice/orderSlice";

export const AddToCart = ({ product }: AddToCartProps) => {
  const cart = useAppSelector(getCartSelector);

  const cartPoductsIds = cart.data.cartData.reduce(
    (acc: { [key: string]: string }, el) => {
      acc[el._id] = el._id;
      return acc;
    },
    {}
  );

  const isInCart = Boolean(cartPoductsIds[product._id]);

  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    if (!isInCart) {
      dispatch(cartActions.setCartData({ ...product, count: 1 }));
      dispatch(cartActions.setTotalSum());
      dispatch(orderActions.setIsSuccessOrder(false));
    }
  };

  return (
    <Button
      variant="primary"
      onClick={handleAddToCart}
      className={clsx(styles.ProductCartButton)}
      disabled={isInCart}
    >
      {isInCart ? "Добавлено" : "В корзину"}
    </Button>
  );
};
