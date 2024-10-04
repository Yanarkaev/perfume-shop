import s from "./ProductListPage.module.scss";
import { Container, Title } from "../../shared/ui";
import { ProductListFilter } from "../../features/ProductListFilter/ProductListFilter";
import { ProductList } from "./ui/ProductList/ProductList";
import { SearchProduct } from "../../features/SearchProduct/SearchProduct";

const ProductListPage = () => {
  return (
    <div className={s.ProductListPage}>
      <Container>
        <Title>Парфюмы</Title>
        <div className={s.wrapper}>
          <ProductListFilter />
          <div className={s.productListWrapper}>
            <SearchProduct />
            <ProductList />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProductListPage;
