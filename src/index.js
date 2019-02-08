import { useState, useEffect, useMemo } from "react";
import { validate } from "indicative";

function useValidate(data, rules, messages, formatter) {
  const [error, setError] = useState();

  useEffect(() => {
    validate(data, rules, messages, formatter)
      .then(() => setError(undefined))
      .catch(errors => setError(errors[0]));
  }, Object.values(data));

  return error;
}

function useStateValidator(initialState, rules, messages, formatter) {
  const [value, setValue] = useState(initialState);
  const [error, setError] = useState();
  const [touched, setTouched] = useState(false);

  function setValueAndTouched(value) {
    if (!touched) setTouched(true);
    setValue(value);
  }

  messages = useMemo(() => {
    if (messages) {
      return Object.keys(messages).reduce((parsedMessages, key) => {
        parsedMessages[`value.${key}`] = messages[key];
        return parsedMessages;
      }, {});
    }
  }, [messages]);

  useEffect(() => {
    if (touched) {
      validate({ value }, { value: rules }, messages, formatter)
        .then(() => serError(undefined))
        .catch(errors => setError(errors[0]));
    }
  }, [value]);

  return [value, setValueAndTouched, error];
}

export { useValidate, useStateValidator };
