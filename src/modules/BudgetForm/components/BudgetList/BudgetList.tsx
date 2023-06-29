import React from "react";
import { BudgetItem } from "../BudgetItem/BudgetItem";
import { useAppSelector } from "../../../../hooks/hooks";
import Loader from "../../../../components/Loader/Loader";

import "./BudgetList.scss";

export const BudgetList: React.FC = () => {
  const { transactions } = useAppSelector((state) => state.budget);

  return (
    <ul className="budget__list">
      {!transactions.length && <Loader text="No transactions" />}

      {transactions.map((transaction, index) => (
        <BudgetItem key={index} transaction={transaction} />
      ))}
    </ul>
  );
};
