import { ITransaction } from "../models/BudgetModels";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const storedTransactions = localStorage.getItem("TRANSACTIONS");
const parsedTransactions = storedTransactions
  ? JSON.parse(storedTransactions)
  : null;

const transactions: ITransaction[] = Array.isArray(parsedTransactions)
  ? parsedTransactions
  : [];

const storedTotal = localStorage.getItem("TOTAL");
const parsedTotal = storedTotal !== null ? JSON.parse(storedTotal) : null;

const total = typeof parsedTotal === "number" ? parsedTotal : 0;

interface IBudgetState {
  total: number;
  singleTransaction: ITransaction | null;
  transactions: ITransaction[];
  popupOpen: boolean;
  transactionType: "add" | "remove";
}

const initialState: IBudgetState = {
  total: total,
  singleTransaction: null,
  transactions: transactions,
  popupOpen: false,
  transactionType: "add",
};

export const budgetSlice = createSlice({
  name: "budget",
  initialState,
  reducers: {
    addToTotal: (state, action: PayloadAction<number>) => {
      state.total += Number(action.payload);

      localStorage.setItem("TOTAL", JSON.stringify(state.total));
    },
    removeFromTotal: (state, action: PayloadAction<number>) => {
      state.total -= Number(action.payload);

      localStorage.setItem("TOTAL", JSON.stringify(state.total));
    },
    addToTransactions: (state, action: PayloadAction<ITransaction>) => {
      state.transactions = [action.payload, ...state.transactions];

      localStorage.setItem(
        "TRANSACTIONS",
        JSON.stringify(state.transactions.map((item) => item))
      );
    },
    removeFromTransactions: (state, action: PayloadAction<{ id: string }>) => {
      state.transactions = state.transactions.filter(
        (transaction) => transaction.id === action.payload.id
      );

      localStorage.setItem(
        "TRANSACTIONS",
        JSON.stringify(state.transactions.map((item) => item))
      );
    },
    openPopup: (state) => {
      state.popupOpen = true;
    },
    closePopup: (state) => {
      state.popupOpen = false;
    },
    setTypeTransaction: (state, action: PayloadAction<"add" | "remove">) => {
      state.transactionType = action.payload;
    },
    getSingleTransaction: (state, action: PayloadAction<string>) => {
      const transaction = state.transactions.find(
        (transaction) => transaction.id === action.payload
      );

      state.singleTransaction = transaction || null;
    },
  },
});

export const {
  addToTransactions,
  removeFromTransactions,
  openPopup,
  closePopup,
  setTypeTransaction,
  addToTotal,
  removeFromTotal,
  getSingleTransaction,
} = budgetSlice.actions;

export default budgetSlice.reducer;
