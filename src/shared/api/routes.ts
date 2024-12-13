import { api, endpoints } from ".";
import { Order } from "../../app/types/order";
import { ProductListFilters } from "../../pages/ProductListPage/model/types/productListSchema";

// products

export const getProductById = (id: string) => {
  return api.get(endpoints.perfumes.byId(id));
};

export const getProductList = (data: ProductListFilters) => {
  return api.get(endpoints.perfumes.list(data));
};

export const getProductNames = () => {
  return api.get(endpoints.perfumes.names);
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

// orders

export const getOrderList = () => {
  return api.get(endpoints.orders.list);
};

export const createOrder = (data: Order) => {
  return api.post(endpoints.orders.create, data);
};
