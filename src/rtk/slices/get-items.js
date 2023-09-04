import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const axiosItems = createAsyncThunk("getItems/axiosItems", async () => {
  const { data } = await axios.get("https://api.sampleapis.com/coffee/hot");
  let price = 10;
  data.map((el) => {
    price += 5;
    return (el.price = price);
  });
  return data;
});

const getItems = createSlice({
  initialState: { products: [], isLoaded: false },
  name: "getProductSlice",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(axiosItems.fulfilled, (state, action) => {
      state.products.push(...action.payload);
      state.isLoaded = true;
      return state;
    });
  },
});
export default getItems.reducer;
