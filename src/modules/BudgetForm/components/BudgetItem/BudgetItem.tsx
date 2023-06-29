import React from "react";
import { ITransaction } from "../../models/BudgetModels";
import { Link } from "react-router-dom";

import "./BudgetItem.scss";

interface IBudgetProps {
  transaction: ITransaction;
}

export const BudgetItem: React.FC<IBudgetProps> = ({ transaction }) => {
  const style = transaction.type === "add" ? "green" : "red";

  return (
    <li className="budget__item" style={{ color: style }}>
      <Link to={transaction.id}>
        <span>
          {"НАЗВА:"} {transaction.text}, {"СУММА:"}{" "}
          {transaction.type === "add" ? "+" : "-"}
          {transaction.value}
        </span>
        <span>{transaction.date}</span>
      </Link>
    </li>
  );
};
