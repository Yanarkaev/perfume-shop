import { StateSchema } from "../../../../app/providers/storeProvider/config";

export const getProductListSelector = (state: StateSchema) => state.productList;
