import { api, endpoints } from ".";
import { ProductListFilters } from "../../pages/ProductListPage/model/types/productListSchema";

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
