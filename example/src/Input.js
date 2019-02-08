import React from "react";
import { useStateValidator } from "react-indicative-hooks";

const rules = "required";

const messages = {
  required: "Please, fill the input with some data"
};

export default function Input() {
  const [value, setValue, error] = useStateValidator("", rules, messages);

  return (
    <>
      <input
        value={value}
        onChange={e => setValue(e.target.value)}
        data-testid="input"
      />
      <br />
      <p data-testid="error">{error && error.message}</p>
    </>
  );
}
