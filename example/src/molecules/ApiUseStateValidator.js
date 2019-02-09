import React from "react";

import Divider from "../atoms/Divider";
import ApiFunction from "../atoms/ApiFunction";
import CodeBlock from "../atoms/CodeBlock";
import ApiParams from "./ApiParams";

import SimpleInput from "../SimpleInput";
import InputWithOptions from "../InputWithOptions";

export default function ApiUseStateValidator() {
  return (
    <>
      <ApiFunction
        title="useStateValidator"
        params={["initialState", "rules", "messagesOrOptions"]}
        response="Array with [value, setValue, error], Error as Object or undefined"
      />

      <ApiParams indicativeParams runOnMount>
        <li>
          initialState: The state that your input starts with, like the empty
          string used in useState("")
        </li>
      </ApiParams>

      <div className="m-10">
        <SimpleInput />
      </div>

      <CodeBlock comp>
        {`import React from "react";
import { useStateValidator } from "react-indicative-hooks";

const rules = "required";

const messages = {
  required: "Please, fill the input with some data"
};

export default function SimpleInput() {
  const [value, setValue, error] = useStateValidator("", rules, messages);

  return (
    <>
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
}`}
      </CodeBlock>

      <Divider />

      <div className="m-10">
        <InputWithOptions />
      </div>

      <CodeBlock comp>{``}</CodeBlock>
    </>
  );
}
