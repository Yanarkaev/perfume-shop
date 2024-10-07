import { useState } from "react";
import { Product } from "../../../../app/types/product";
import s from "./CartProductCard.module.scss";
import { Button } from "../../../../shared/ui";
import { useAppDispatch } from "../../../../app/providers/storeProvider/hooks";
import { cartActions } from "../../../../entities/Cart/model/slice/cartSlice";
import clsx from "clsx";

interface IProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  product: Product;
}

export const CartProductCard = ({ product }: IProps) => {
  const dispatch = useAppDispatch();
  const [counter, setCounter] = useState(1);

  const handleDecCount = () => {
    if (counter > 1) {
      setCounter((prev) => prev - 1);
    } else {
      dispatch(cartActions.deleteFromCart(product._id));
    }
  };

  const handleIncCount = () => {
    if (counter < product.mlsLeft) {
      setCounter((prev) => prev + 1);
    }
  };
  return (
    <div className={s.CartProductCard}>
      <div className={s.img}>
        <img src={product.imageURL} alt={product.name} />
      </div>
      <div className={s.container}>
        <div className={s.info}>
          <div className={s.name}>{product.name}</div>
          <div className={s.brand}>{product.brand.name}</div>
          <div className={s.price}>
            <span>{product.price}</span> ₽ за 1 мл
          </div>
        </div>

        <div className={s.counter}>
          <div>Объем (мл)</div>
          <div className={s.counterInner}>
            <Button
              onClick={handleDecCount}
              variant="outlined"
              className={clsx({ [s.delete]: counter <= 1 })}
            >
              {counter <= 1 ? "×" : "-"}
            </Button>
            <span>{counter}</span>
            <Button onClick={handleIncCount} variant="outlined">
              +
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
