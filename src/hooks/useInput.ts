import React from "react";
import { ChangeEvent, useState } from "react";

interface IInputHook<T> {
  value: T;
  setValue: React.Dispatch<React.SetStateAction<T>>;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const useInput = <T extends string | number>(
  initialValue: T
): IInputHook<T> => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value as T);
  };

  return {
    value,
    setValue,
    onChange: handleChange,
  };
};
