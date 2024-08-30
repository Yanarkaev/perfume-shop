import { ProductCard } from "../../../entities";
import { Container } from "../../../shared/ui";
import image from "../assets/image.png";
import styles from "./ProductsList.module.scss";

export const ProductsList = () => {
  // const arr = new Array(10).fill(0);
  return (
    <section>
      <Container className={styles.container}>
          <ProductCard img={image} brand="Creed" name="Aventus" price={200} />
          <ProductCard img={image} brand="Sospiro" name="Esba puro" price={150} discount={0} />
      </Container>
    </section>
  );
};
