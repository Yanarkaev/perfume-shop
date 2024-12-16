import { StateSchema } from "../../../../app/providers/storeProvider/config";

export const getOrderSelector = (state: StateSchema) => state.order;
