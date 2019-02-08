# react-indicative-hooks

> A wrapper between React Hooks and Indicative libraries

[![NPM](https://img.shields.io/npm/v/react-indicative-hooks.svg)](https://www.npmjs.com/package/react-indicative-hooks) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-indicative-hooks
```

## Usage

### useStateValidator

```jsx
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
      <input value={value} onChange={e => setValue(e.target.value)} />
      <br />
      {error && error.message}
    </>
  );
}
```

### useValidate

```jsx
import React, { useState } from "react";
import { useValidate } from "react-indicative-hooks";

const rules = {
  name: "required",
  email: "required|email"
};

const messages = {
  "name.required": "Please, fill the name input with some data"
};

export default function Input() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const errors = useValidate({ name, email }, rules, messages);

  return (
    <>
      <input value={name} onChange={e => setName(e.target.value)} />
      <br />
      <input value={email} onChange={e => setEmail(e.target.value)} />
    </>
  );
}
```

## License

MIT © [marceloadsj](https://github.com/marceloadsj)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
