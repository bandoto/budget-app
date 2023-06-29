import { configureStore } from "@reduxjs/toolkit";
import { budgetSlice } from "../modules/BudgetForm";

export const store = configureStore({
  reducer: {
    budget: budgetSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
