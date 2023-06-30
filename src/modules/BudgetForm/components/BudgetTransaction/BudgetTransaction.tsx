import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../../hooks/hooks";
import {
  getSingleTransaction,
  removeFromTransactions,
} from "../../api/budgetSlice";
import { Container } from "../../../../UI/Container/Container";

import "./BudgetTransaction.scss";

export const BudgetTransaction: React.FC = () => {
  const dispatch = useAppDispatch();
  const params = useParams<{ id: string }>();

  const { singleTransaction } = useAppSelector((state) => state.budget);

  useEffect(() => {
    if (params.id) {
      dispatch(getSingleTransaction(params.id));
    }
  }, [params.id, dispatch]);

  const handleClick = (
    id: string | undefined,
    value: number | undefined,
    type: "add" | "remove" | undefined
  ): void => {
    if (id && value && type) {
      dispatch(removeFromTransactions({ id, value, type }));
    }
  };

  return (
    <section className="transaction">
      <Container>
        <div className="transaction__body">
          <button className="transaction__button">
            <Link to="/">Back</Link>
          </button>
          <span>Назва: {singleTransaction?.text}</span>
          <span>
            Сумма: {singleTransaction?.type === "add" ? "+" : "-"}
            {singleTransaction?.value}
          </span>
          <span>Дата: {singleTransaction?.date}</span>
          <button
            onClick={() =>
              handleClick(
                singleTransaction?.id,
                singleTransaction?.value,
                singleTransaction?.type
              )
            }
            className="transaction__button"
          >
            <Link to="/">DELETE</Link>
          </button>
        </div>
      </Container>
    </section>
  );
};
