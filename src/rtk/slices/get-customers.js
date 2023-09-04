import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const axiosCustomers = createAsyncThunk(
  "customersSlice/axiosCustomers",
  async () => {
    const { data } = await axios.get("http://localhost:3000/customers");
    return data;
  }
);

const customersSlice = createSlice({
  initialState: { customers: [], getApi: false },
  name: "customersSlice",
  reducers: {
    bookTable: (state, action) => {
      state.customers.push(action.payload);
    },
    removeTable: (state, action) => {
      const newState = {
        customers: state.customers.filter((el) => el.id !== action.payload.id),
        getApi: state.getApi,
      };
      return newState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(axiosCustomers.fulfilled, (state, action) => {
      state.customers = action.payload;
      state.getApi = true;
      return state;
    });
  },
});

export const { bookTable, removeTable } = customersSlice.actions;
export default customersSlice.reducer;
