import { useAppSelector } from "../../../../../app/providers/storeProvider/hooks";
import { getCart } from "../../../../../entities/Cart/model/selectors/cart.selector";
import s from "./CartCounter.module.scss";

export const CartCounter = () => {
  const { data } = useAppSelector(getCart);

  return (
    data.length > 0 && (
      <span className={s.CartCounter}>{data.length > 0 && data.length}</span>
    )
  );
};
