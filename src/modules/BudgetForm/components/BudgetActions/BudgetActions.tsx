import React from "react";
import { useAppDispatch, useAppSelector } from "../../../../hooks/hooks";
import { openPopup, setTypeTransaction } from "../../api/budgetSlice";

import "./BudgetActions.scss";

export const BudgetActions: React.FC = () => {
  const dispatch = useAppDispatch();
  const { popupOpen } = useAppSelector((state) => state.budget);

  const addToTotal = () => {
    dispatch(openPopup());
    dispatch(setTypeTransaction("add"));
  };

  const removeFromTotal = () => {
    dispatch(openPopup());
    dispatch(setTypeTransaction("remove"));
  };

  return (
    <div className="budget__actions">
      <button
        disabled={popupOpen}
        onClick={addToTotal}
        className="budget__action"
      >
        Додати дохід
      </button>
      <button
        disabled={popupOpen}
        onClick={removeFromTotal}
        className="budget__action"
      >
        Додати витрату
      </button>
    </div>
  );
};
