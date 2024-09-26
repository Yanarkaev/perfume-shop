import { Button } from "../../../shared/ui";
import styles from "./AddToCart.module.scss"

export const AddToCart = () => {
  return (
    <Button variant="success" className={styles.ProductCartButton}>
      В корзину
    </Button>
  );
};
