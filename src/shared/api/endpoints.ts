import { ProductListFilters } from "../../pages/ProductListPage/model/types/productListSchema";
import { buildUrlParams } from "../helpers/buildUrlParams";

export const endpoints = {
  perfumes: {
    list: (params: ProductListFilters) =>
      buildUrlParams<ProductListFilters>("/perfumes", params),
    byId: (id: string) => `/perfumes/perfume/${id}`,
    news: `/perfumes/news`,
    hits: `/perfumes/hits`,
    discounts: `/perfumes/discounts`,
    create: `/perfumes`,
    byCategory: (id: string) => `/perfumes/category/${id}`,
    byBrand: (id: string) => `/perfumes/brand/${id}`, //Нужно написать на бэке
  },

  auth: {
    //
  },
};
