import React from "react";
import MainPage from "./pages/MainPage/MainPage";
import { useAppSelector } from "./hooks/hooks";
import { BudgetPopup, BudgetTransaction } from "./modules/BudgetForm";
import { Route, Routes } from "react-router-dom";

function App() {
  const { popupOpen, transactionType } = useAppSelector(
    (state) => state.budget
  );

  return (
    <div className="wrapper">
      <main className="main">
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/:id" element={<BudgetTransaction />}></Route>
          <Route path="*" element={<h1>Page Not Found</h1>}></Route>
        </Routes>
        <BudgetPopup type={transactionType} isShow={popupOpen} />
      </main>
    </div>
  );
}

export default App;
