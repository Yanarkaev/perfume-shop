import { StateSchema } from "../../../../app/providers/storeProvider/config";

export const getProductNamesSelector = (state: StateSchema) => state.searchProduct;
