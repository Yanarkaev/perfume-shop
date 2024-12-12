import { useAppSelector } from "../../../../../app/providers/storeProvider/hooks";
import { getCartSelector } from "../../../../../entities/Cart/model/selectors/cart.selector";
import s from "./CartCounter.module.scss";

export const CartCounter = () => {
  const { data } = useAppSelector(getCartSelector);

  return (
    data.cartData?.length > 0 && (
      <span className={s.CartCounter}>{data.cartData.length}</span>
    )
  );
};
