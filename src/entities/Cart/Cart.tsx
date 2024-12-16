import { useNavigate } from "react-router";
import { useAppSelector } from "../../app/providers/storeProvider/hooks";
import { OopsBlock, Paper } from "../../shared/ui";
import s from "./Cart.module.scss";
import { getCartSelector } from "./model/selectors/cart.selector";
import { CartProductCard } from "./ui/CartProductCard/CartProductCard";
import { OrderBlock } from "./ui/OrderBlock/OrderBlock";
import { Path } from "../../shared/constants/routingPaths";

export const Cart = () => {
  const { data } = useAppSelector(getCartSelector);
  const navigate = useNavigate();
  return (
    <div className={s.Cart}>
      {data.cartData.length > 0 ? (
        <>
          <Paper className={s.products}>
            {data.cartData.map((el, i) => (
              <CartProductCard
                key={el._id + i}
                product={{ ...el, mlsLeft: 10 }}
              />
            ))}
          </Paper>
          <OrderBlock />
        </>
      ) : (
        <OopsBlock
          text="Корзина пуста"
          className={s.oops}
          actionText="Перейти к каталогу"
          action={() => navigate(Path.Perfumes)}
        />
      )}
    </div>
  );
};
