import React from "react";
import { useAppSelector } from "../../../../hooks/hooks";
import { BudgetActions } from "../BudgetActions/BudgetActions";

import "./BudgetValue.scss";

export const BudgetValue: React.FC = () => {
  const { total } = useAppSelector((state) => state.budget);

  return (
    <div className="budget__head">
      <div className="budget__value">
        <h1 className="budget__total">{total}</h1>
      </div>
      <BudgetActions />
    </div>
  );
};
