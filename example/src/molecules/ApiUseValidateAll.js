import React, { Fragment } from 'react';

import DataParam from '../atoms/DataParam';
import Divider from '../atoms/Divider';
import CodeBlock from '../atoms/CodeBlock';
import ApiFunction from '../atoms/ApiFunction';
import ApiParams from '../molecules/ApiParams';

import SimpleFormAll from '../SimpleFormAll';
import FormAllWithOptions from '../FormAllWithOptions';

export default function ApiUseValidate() {
    return (
        <Fragment>
            <ApiFunction
                title="useValidateAll"
                params={['data', 'rules', 'messagesOrOptions']}
                response="Array of Errors or undefined"
            />

            <ApiParams indicativeParams>
                <DataParam />
            </ApiParams>

            <div className="m-10">
                <SimpleFormAll />
            </div>

            <CodeBlock comp>
                {`import React, { useState } from "react";
import { useValidateAll } from "react-indicative-hooks";

const rules = {
  name: "required",
  email: "required|email"
};

const messages = {
  "name.required": "Please, fill the name input with some data",
  "email.email": "You need to enter a valid email"
};

export default function SimpleFormAll() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const errors = useValidateAll({ name, email }, rules, messages);

  return (
    <>
      Name
      <input
        value={name}
        onChange={e => setName(e.target.value)}
        data-testid="name"
        className="ml-2 mr-5 mb-5"
      />
      Email
      <input
        value={email}
        onChange={e => setEmail(e.target.value)}
        data-testid="email"
        className="ml-2 mr-5 mb-5"
      />
      <p className="text-red" data-testid="error">
        {errors && errors.map(error => error.message).join(", ")}
      </p>
    </>
  );
}`}
            </CodeBlock>

            <Divider />

            <div className="m-10">
                <FormAllWithOptions />
            </div>

            <CodeBlock comp>
                {`import React, { useState, useCallback } from "react";
import { useValidateAll } from "react-indicative-hooks";

const rules = {
  name: "required",
  email: "required|email"
};

const messages = {
  "name.required": "Please, fill the name input with some data",
  "email.email": "You need to enter a valid email"
};

export default function FormAllWithOptions() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [show, setShow] = useState(false);

  const options = {
    messages,
    onSuccess: useCallback(() => setShow(false), []),
    onError: useCallback(() => setShow(true), [])
  };

  const errors = useValidateAll({ name, email }, rules, options);

  return (
    <>
      <p className="text-red mb-5" data-testid="alert">
        {show && "Sorry, you have an error"}
      </p>
      Name
      <input
        value={name}
        onChange={e => setName(e.target.value)}
        data-testid="name"
        className="ml-2 mr-5 mb-5"
      />
      Email
      <input
        value={email}
        onChange={e => setEmail(e.target.value)}
        data-testid="email"
        className="ml-2 mr-5 mb-5"
      />
      <p className="text-red" data-testid="error">
        {errors && errors.map(error => error.message).join(", ")}
      </p>
    </>
  );
}`}
            </CodeBlock>
        </Fragment>
    );
}
