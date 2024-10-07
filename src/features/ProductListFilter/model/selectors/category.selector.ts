import { StateSchema } from "../../../../app/providers/storeProvider/config";

export const getCategoryListSelector = (state: StateSchema) =>
  state.categoryList;
