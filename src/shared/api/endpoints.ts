export const endpoints = {
  perfumes: {
    list: `/perfumes`,
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
