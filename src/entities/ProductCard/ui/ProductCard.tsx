import clsx from "clsx";
import styles from "./ProductCard.module.scss";
import { Button } from "../../../shared/ui";

interface IProps {
  img: string;
  brand: string;
  name: string;
  price: number;
  variant?: "default";
  discount?: number;
}

export const ProductCard = ({
  img,
  brand,
  name,
  price,
  variant = "default",
  discount = 85,
  ...props
}: IProps) => {
  const currentPrice = discount > 0 ? price - (price / 100) * discount : price;
  const isDiscount = currentPrice !== price;
  return (
    <article {...props} className={clsx(styles.ProductCard, styles[variant])}>
      {isDiscount && <div className={styles.discountMark}>- {discount}%</div>}

      <div className={styles.img}>
        <img src={img} alt={`${brand} ${name}`} />
      </div>

      <div className={styles.info}>
        <p className={styles.brand}>{brand}</p>
        <p className={styles.name}>{name}</p>
        <p className={styles.price}>
          {isDiscount && <s className={styles.discount}>{price} ₽</s>}
          <p className={styles.priceNumber}>{currentPrice} ₽</p> за 1 мл
        </p>
      </div>

      <div className={styles.btnWrapper}>
        <Button variant="success" className={styles.button}>
          В корзину
        </Button>
      </div>
    </article>
  );
};
