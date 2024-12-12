import { StateSchema } from "../../../../app/providers/storeProvider/config";

export const getBrandListSelector = (state: StateSchema) => state.brandList;
