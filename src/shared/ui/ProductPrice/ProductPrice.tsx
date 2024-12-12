import { DetailedHTMLProps, memo } from "react";
import s from "./ProductPrice.module.scss";
import clsx from "clsx";

interface IProps
  extends DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  price: number;
  discount: number;
}

export const ProductPrice = memo(
  ({ price, discount, className = "", ...props }: IProps) => {
    const isDiscount = Boolean(discount && discount > 0);
    const originalPrice = isDiscount ? price / (1 - discount / 100) : price;

    return (
      <div className={clsx(s.ProductPrice, className)} {...props}>
        {isDiscount && <s className={s.discount}>{originalPrice + 10} ₽</s>}
        <p className={s.priceNumber}>{price} ₽</p> <span className={s.ml}>за 1 мл</span>
      </div>
    );
  }
);
