import { StateSchema } from "../../../../app/providers/storeProvider/config";

export const getCartSelector = (state: StateSchema) => state.cart;
