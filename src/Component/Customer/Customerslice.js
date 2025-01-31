import { createSlice } from "@reduxjs/toolkit";
import {
  addItemAction,
  fetchItemAction,
  viewItemAction,
} from "./CustomerActions";

const CustomerSlice = createSlice({
  name: "customer",
  initialState: {
    items: [],
    customerDetails: {
      name: "",
      age: "",
      address: "",
    },
  },
  reducers: {
    handleCustomerChange: (state, action) => {
      const { field, value } = action.payload;
      state.customerDetails = { ...state.customerDetails, [field]: value };
    },
    handleResetCustomer: (state) => {
      state.customerDetails = {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchItemAction.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(viewItemAction.fulfilled, (state, action) => {
        state.customerDetails = {
          ...state.customerDetails,
          id: action.payload._id,
          ...action.payload,
        };
      });
  },
});

export const { handleCustomerChange, handleResetCustomer } =
  CustomerSlice.actions;

export default CustomerSlice.reducer;
