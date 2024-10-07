import clsx from "clsx";
import styles from "./ProductCard.module.scss";
import { ProductProps } from "../../model/types/productSchema";
import { AddToCart } from "../../../../features/addToCart";

export const ProductCard = ({
  img,
  brand,
  name,
  price = 0,
  variant = "default",
  discount = 0,
  is_hit,
  is_new,
  ...props
}: ProductProps) => {
  const isDiscount = discount > 0;
  const originalPrice = isDiscount ? price / (1 - discount / 100) : price;

  return (
    <article {...props} className={clsx(styles.ProductCard, styles[variant])}>
      <div className={styles.accentMarks}>
        {isDiscount && (
          <div className={clsx(styles.mark, styles.discountMark)}>
            - {discount}%
          </div>
        )}
        {is_hit && (
          <div className={clsx(styles.mark, styles.hitMark)}>{"Hit"}</div>
        )}
        {is_new && (
          <div className={clsx(styles.mark, styles.newMark)}>{"New"}</div>
        )}
      </div>

      <div className={styles.img}>
        <img src={img} alt={`${brand} ${name}`} />
      </div>

      <div className={styles.info}>
        <div className={styles.brand}>{brand}</div>
        <div className={styles.name}>{name}</div>
        <div className={styles.price}>
          {isDiscount && <s className={styles.discount}>{originalPrice} ₽</s>}
          <p className={styles.priceNumber}>{price} ₽</p> за 1 мл
        </div>
      </div>

      <div className={styles.btnWrapper}>
        <AddToCart />
      </div>
    </article>
  );
};
