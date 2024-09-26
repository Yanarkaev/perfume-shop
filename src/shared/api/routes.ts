import { api, endpoints } from ".";

export const getProductList = () => {
  return api.get(endpoints.perfumes.list);
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
  
