import { useState, useEffect } from "react";
import { validate } from "indicative";

function useValidate(data, rules, messages) {
  const [error, setError] = useState();

  useEffect(() => {
    validate(data, rules, messages)
      .then(() => serError(undefined))
      .catch(errors => setError(errors));
  }, [value]);

  return errors;
}

function useStateValidator(initialState, rules, messages) {
  const [value, setValue] = useState(initialState);
  const [error, setError] = useState();

  messages = useMemo(() => {
    if (messages) {
      return Object.keys(messages).reduce((parsedMessages, key) => {
        parsedMessages[`value.${key}`] = messages[key];
        return parsedMessages;
      }, {});
    }
  }, [messages]);

  useEffect(() => {
    validate({ value }, { value: rules }, messages)
      .then(() => serError(undefined))
      .catch(error => setError(error[0]));
  }, [value]);

  return [value, setValue, error];
}

export { useValidate, useStateValidator };
