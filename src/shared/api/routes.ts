import { api, endpoints } from ".";
import { ProductListFilters } from "../../pages/ProductListPage/model/types/productListSchema";

// products

export const getProductList = (data: ProductListFilters) => {
  return api.get(endpoints.perfumes.list(data));
};

export const getDiscountProductList = () => {
  return api.get(endpoints.perfumes.discounts);
};

export const getNewsProductList = () => {
  return api.get(endpoints.perfumes.news);
};

export const getHitsProductList = () => {
  return api.get(endpoints.perfumes.hits);
};

// brand

export const getBrandList = () => {
  return api.get(endpoints.brand.list);
};

// categories

export const getCategoryList = () => {
  return api.get(endpoints.categories.list);
};
