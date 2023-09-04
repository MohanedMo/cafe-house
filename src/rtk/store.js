import { configureStore } from "@reduxjs/toolkit"
import getItems from "./slices/get-items"
import customersSlice from "./slices/get-customers"
import navStatus from "./slices/navStatus"


export const store = configureStore({
    reducer: {
      items: getItems,
      customers: customersSlice,
      navbarStatus: navStatus,
    },
  })