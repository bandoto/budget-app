import React, { FormEvent } from "react";
import { nanoid } from "nanoid";
import { useAppDispatch, useAppSelector } from "../../../../hooks/hooks";
import {
  addToTransactions,
  addToTotal,
  closePopup,
  removeFromTotal,
} from "../../api/budgetSlice";
import { useInput } from "../../../../hooks/useInput";
import { ITransaction } from "../../models/BudgetModels";

import "./BudgetPopup.scss";

interface IPopup {
  type: "add" | "remove";
  isShow: boolean;
}

export const BudgetPopup: React.FC<IPopup> = ({ type, isShow }) => {
  const nameInput = useInput<string>("");
  const valueInput = useInput<number>(1);

  const { total } = useAppSelector((state) => state.budget);
  const dispatch = useAppDispatch();

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();

    const newTransaction: ITransaction = {
      id: nanoid(5),
      text: nameInput.value,
      value: Number(valueInput.value),
      type: type,
      date: new Date().toLocaleString(),
    };

    dispatch(addToTransactions(newTransaction));
    dispatch(closePopup());

    nameInput.setValue("");
    valueInput.setValue(1);

    handleChangeTotalValue(newTransaction.value);
  };

  const handleChangeTotalValue = (value: number): void => {
    if (type === "add") {
      dispatch(addToTotal(value));
    } else if (type === "remove") {
      dispatch(removeFromTotal(value));
    }
  };

  return (
    <>
      {isShow && (
        <div className="popup">
          <div className="popup__body">
            <div className="popup__head">
              <h1 className="popup__title">
                {type === "add" ? "Додайте дохід" : "Додайте витрату"}
              </h1>
              <span onClick={() => dispatch(closePopup())}>X</span>
            </div>
            <form className="popup__form" action="" onSubmit={handleSubmit}>
              <label className="popup__label" htmlFor="name">
                Назва транзакції:
              </label>
              <input
                className="popup__input"
                id="name"
                type="text"
                required
                value={nameInput.value}
                onChange={nameInput.onChange}
              />
              <label className="popup__label" htmlFor="value">
                Сумма:
              </label>
              <input
                className="popup__input"
                id="value"
                type="number"
                max={type === "remove" ? total : ""}
                value={valueInput.value}
                onChange={valueInput.onChange}
              />
              <button className="popup__button" type="submit">
                Додати
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
