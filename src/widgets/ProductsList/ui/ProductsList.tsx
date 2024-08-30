import { ProductCard } from "../../../entities";
import { Container } from "../../../shared/ui";
import image from "../assets/image.png";
import styles from "./ProductsList.module.scss";

export const ProductsList = () => {
  const arr = new Array(10).fill(0);
  return (
    <section>
      <Container className={styles.container}>
        {arr.map(() => (
          <ProductCard img={image} brand="Creed" name="Aventus" price={200} />
        ))}
      </Container>
    </section>
  );
};
