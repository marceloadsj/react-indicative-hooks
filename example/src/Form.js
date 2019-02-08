import React, { useState } from "react";
import { useValidate } from "react-indicative-hooks";

const rules = {
  name: "required",
  email: "required|email"
};

const messages = {
  "name.required": "Please, fill the name input with some data",
  "email.email": "You need to enter a valid email"
};

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const error = useValidate({ name, email }, rules, messages);

  return (
    <>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
        data-testid="name"
      />
      <br />
      <input
        value={email}
        onChange={e => setEmail(e.target.value)}
        data-testid="email"
      />
      <br />
      <p data-testid="error">{error && error.message}</p>
    </>
  );
}
