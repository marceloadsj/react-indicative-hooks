import React, { Fragment } from 'react';

import DataParam from '../atoms/DataParam';
import Divider from '../atoms/Divider';
import CodeBlock from '../atoms/CodeBlock';
import ApiFunction from '../atoms/ApiFunction';
import ApiParams from '../molecules/ApiParams';

import SimpleForm from '../SimpleForm';
import FormWithOptions from '../FormWithOptions';

export default function ApiUseValidate() {
    return (
        <Fragment>
            <ApiFunction
                title="useValidate"
                params={['data', 'rules', 'messagesOrOptions']}
                response="Error Object or undefined"
            />

            <ApiParams indicativeParams>
                <DataParam />
            </ApiParams>

            <div className="m-10">
                <SimpleForm />
            </div>

            <CodeBlock comp>
                {`import React, { useState } from "react";
import { useValidate } from "react-indicative-hooks";

const rules = {
  name: "required",
  email: "required|email"
};

const messages = {
  "name.required": "Please, fill the name input with some data",
  "email.email": "You need to enter a valid email"
};

export default function SimpleForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const error = useValidate({ name, email }, rules, messages);

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
        {error && error.message}
      </p>
    </>
  );
}`}
            </CodeBlock>

            <Divider />

            <div className="m-10">
                <FormWithOptions />
            </div>

            <CodeBlock comp>
                {`import React, { useState } from "react";
import { useValidate } from "react-indicative-hooks";

const rules = {
  name: "required",
  email: "required|email"
};

const messages = {
  "name.required": "Please, fill the name input with some data",
  "email.email": "You need to enter a valid email"
};

export default function FormWithOptions() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [show, setShow] = useState(false);

  const options = {
    messages,
    onSuccess: () => setShow(false),
    onError: () => setShow(true)
  };

  const error = useValidate({ name, email }, rules, options);

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
        {error && error.message}
      </p>
    </>
  );
}`}
            </CodeBlock>
        </Fragment>
    );
}
