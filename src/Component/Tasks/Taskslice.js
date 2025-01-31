import { createSlice } from "@reduxjs/toolkit";
import { tasks } from "../data/data";

const taskslice = createSlice({
  name: "task",
  initialState: {
    items: tasks ?? [],
  },
  reducers: {
    addItem: (state, action) => {
      //   return [...state.items, action.payload];
      state.items.push(action.payload);
    },
    searchItem: (state, action) => {
      if (action.payload) {
        state.items = state.items?.filter((item) =>
          Object.values(item)?.some((value) =>
            value
              ?.toString()
              ?.toLowerCase()
              ?.includes(action.payload.toLowerCase())
          )
        );
      } else {
        state.items = tasks;
      }
    },
    updateItem: (state, action) => {
      const index = state.items.findIndex(
        (data) => data?.id == action.payload.id
      );
      state.items[index] = { ...action.payload };
    },
    deleteItem: (state, action) => {
      state.items = state.items.filter((data) => data.id !== action.payload);
    },
  },
});

export const { addItem, updateItem, deleteItem, searchItem } =
  taskslice.actions;
export default taskslice.reducer;
