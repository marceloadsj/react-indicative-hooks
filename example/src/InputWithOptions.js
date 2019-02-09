import React, { useState } from "react";
import { useStateValidator } from "react-indicative-hooks";

const rules = "required";

const messages = {
  required: "Please, fill the input with some data"
};

export default function InputWithOptions() {
  const [show, setShow] = useState(false);

  const options = {
    messages,
    runOnMount: true,
    onSuccess: () => setShow(false),
    onError: () => setShow(true)
  };

  const [value, setValue, error] = useStateValidator("", rules, options);

  return (
    <>
      <p className="text-red mb-5" data-testid="alert">
        {show && "Sorry, you have an error"}
      </p>
      Value
      <input
        value={value}
        onChange={e => setValue(e.target.value)}
        data-testid="input"
        className="ml-2 mr-5 mb-5"
      />
      <p className="text-red" data-testid="error">
        {error && error.message}
      </p>
    </>
  );
}
