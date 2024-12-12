import s from "./CartProductCard.module.scss";
import { Button, ProductPrice } from "../../../../shared/ui";
import { useAppDispatch } from "../../../../app/providers/storeProvider/hooks";
import { cartActions } from "../../../../entities/Cart/model/slice/cartSlice";
import clsx from "clsx";
import { CartProduct } from "../../../../entities/Cart/model/types/cartShema";
import { useNavigate } from "react-router";

interface IProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  product: CartProduct;
}

export const CartProductCard = ({ product }: IProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleDecCount = () => {
    if (product.count > 1) {
      dispatch(cartActions.setProductCount({ id: product._id, act: "dec" }));
    } else {
      dispatch(cartActions.deleteFromCart(product._id));
    }
  };

  const handleIncCount = () => {
    if (product.count < product.mlsLeft) {
      dispatch(cartActions.setProductCount({ id: product._id, act: "inc" }));
    }
  };

  const handleOpenProduct = () => {
    navigate(`/perfumes/${product._id}`);
  };

  return (
    <article className={s.CartProductCard}>
      <div className={s.img} onClick={handleOpenProduct}>
        <img src={product.imageURL} alt={product.name} />
      </div>
      <div className={s.container}>
        <div className={s.info}>
          <div className={s.brand}>{product.brand.name}</div>
          <div className={s.name}>{product.name}</div>
          <ProductPrice
            price={product.price}
            discount={product.discount}
            className={s.price}
          />
        </div>

        <div className={s.counter}>
          {/* <div>Объем (мл)</div> */}
          <div className={s.counterInner}>
            <Button
              onClick={handleDecCount}
              variant="outlined"
              className={clsx(s.counterBtn, { [s.delete]: product.count <= 1 })}
            >
              {product.count <= 1 ? "×" : "-"}
            </Button>
            <span>{product.count} мл</span>
            <Button
              onClick={handleIncCount}
              variant="outlined"
              className={s.counterBtn}
            >
              +
            </Button>
          </div>

          <div className={s.productSum}>
            Сумма: {product.price * product.count} ₽
          </div>
        </div>
      </div>
    </article>
  );
};
