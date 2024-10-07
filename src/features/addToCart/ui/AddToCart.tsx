import {
  useAppDispatch,
  useAppSelector,
} from "../../../app/providers/storeProvider/hooks";
import { getCart } from "../../../entities/Cart/model/selectors/cart.selector";
import { Button } from "../../../shared/ui";
import { AddToCartProps } from "../model/types/addToCartShema";
import { cartActions } from "../../../entities/Cart/model/slice/cartSlice";

import styles from "./AddToCart.module.scss";
import clsx from "clsx";

export const AddToCart = ({ product }: AddToCartProps) => {
  const cart = useAppSelector(getCart);
  const cartPoductsIds = cart.data.reduce(
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
      dispatch(cartActions.setCartData(product));
    }
  };

  return (
    <Button
      variant="success"
      onClick={handleAddToCart}
      className={clsx(styles.ProductCartButton)}
      disabled={isInCart}
    >
      {isInCart ? "Добавлено" : "В корзину"}
    </Button>
  );
};
