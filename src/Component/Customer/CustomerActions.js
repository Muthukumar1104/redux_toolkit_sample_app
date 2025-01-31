import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  addItemAPI,
  deleteItemAPI,
  fetchItemAPI,
  updateItemAPI,
  viewItemAPI,
} from "./CustomerAPI";

export const fetchItemAction = createAsyncThunk(
  "customer/fetchItem",
  async () => {
    const response = await fetchItemAPI();
    return response.data;
  }
);

export const addItemAction = createAsyncThunk(
  "customer/addItem",
  async (item, { dispatch }) => {
    const response = await addItemAPI(item);
    dispatch(fetchItemAction());
    return response.data;
  }
);

export const viewItemAction = createAsyncThunk(
  "customer/viewItem",
  async (id) => {
    const response = await viewItemAPI(id);
    return response.data;
  }
);

export const updateItemAction = createAsyncThunk(
  "customer/updateItem",
  async (item, { dispatch }) => {
    const response = await updateItemAPI(item);
    dispatch(fetchItemAction());
    return response.data;
  }
);

export const deleteItemAction = createAsyncThunk(
  "customer/deleteItem",
  async (id, { dispatch }) => {
    const response = await deleteItemAPI(id);
    dispatch(fetchItemAction());
    return response.data;
  }
);
