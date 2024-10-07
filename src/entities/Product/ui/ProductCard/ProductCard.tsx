import clsx from "clsx";
import styles from "./ProductCard.module.scss";
import { ProductProps } from "../../model/types/productSchema";
import { AddToCart } from "../../../../features/addToCart";
import { useNavigate } from "react-router";

export const ProductCard = ({
  product,
  variant = "default",
  ...props
}: ProductProps) => {
  const { imageURL, price, discount, name, brand, is_hit, is_new, _id } =
    product;
  const isDiscount = discount > 0;
  const originalPrice = isDiscount ? price / (1 - discount / 100) : price;
  const navigate = useNavigate();

  const handleOpenProduct = (e, id: string) => {
    if (e.target.localName !== "button") {
      navigate(id);
    }
  };

  return (
    <article
      {...props}
      className={clsx(styles.ProductCard, styles[variant])}
      onClick={(e) => handleOpenProduct(e, _id)}
    >
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
        <img src={imageURL} alt={`${brand} ${name}`} />
      </div>

      <div className={styles.info}>
        <div className={styles.brand}>{brand.name}</div>
        <div className={styles.name}>{name}</div>
        <div className={styles.price}>
          {isDiscount && <s className={styles.discount}>{originalPrice} ₽</s>}
          <p className={styles.priceNumber}>{price} ₽</p> за 1 мл
        </div>
      </div>

      <div className={styles.btnWrapper}>
        <AddToCart product={product} />
      </div>
    </article>
  );
};
