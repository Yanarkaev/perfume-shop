import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "../../../../app/providers/storeProvider/config";
import { createOrder } from "../../../../shared/api/routes";
import { Order } from "../../../../app/types/order";

export const createOrderThunk = createAsyncThunk<
  string,
  Order,
  ThunkConfig<string>
>("order/create", async (data, thunkApi) => {
  try {
    const response = await createOrder(data);
    return response.data;
  } catch (error) {
    console.log(error);
    return thunkApi.rejectWithValue(error as string);
  }
});