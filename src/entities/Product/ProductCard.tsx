import clsx from "clsx";
import styles from "./ProductCard.module.scss";
import { ProductProps } from "./model/types/productSchema";
import { AddToCart } from "../../features/addToCart";
import { useNavigate } from "react-router";
import { ProductPrice } from "../../shared/ui";
import { memo } from "react";

export const ProductCard = memo(
  ({
    product,
    variant = "default",
    className = "",
    ...props
  }: ProductProps) => {
    const { imageURL, price, discount, name, brand, is_hit, is_new, _id } =
      product;
    const isDiscount = discount > 0;
    const navigate = useNavigate();

    const handleOpenProduct = (e: React.MouseEvent) => {
      const target = e.target as HTMLElement;

      if (target.localName !== "button") {
        navigate(`/perfumes/${_id}`);
      }
    };

    return (
      <article
        {...props}
        className={clsx(styles.ProductCard, className, styles[variant])}
        onClick={(e) => handleOpenProduct(e)}
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
          <ProductPrice
            className={styles.discount}
            price={price}
            discount={discount}
          />
        </div>

        <div className={styles.btnWrapper}>
          <AddToCart product={product} />
        </div>
      </article>
    );
  }
);
