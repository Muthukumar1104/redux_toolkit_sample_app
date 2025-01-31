import { configureStore } from "@reduxjs/toolkit";
import Taskreducer from "../Component/Tasks/Taskslice";
import Customerreducer from "../Component/Customer/Customerslice";

export const store = configureStore({
  reducer: {
    task: Taskreducer,
    customer: Customerreducer,
  },
});
