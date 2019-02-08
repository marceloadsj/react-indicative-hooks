import { useState, useEffect, useMemo } from "react";
import { validate } from "indicative";

function useValidate(data, rules, messages) {
  const [errors, setErrors] = useState();

  useEffect(() => {
    validate(data, rules, messages)
      .then(() => setErrors(undefined))
      .catch(errors => setErrors(errors));
  }, Object.values(data));

  return errors;
}

function useStateValidator(initialState, rules, messages) {
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
      validate({ value }, { value: rules }, messages)
        .then(() => serError(undefined))
        .catch(errors => setError(errors[0]));
    }
  }, [value]);

  return [value, setValueAndTouched, error];
}

export { useValidate, useStateValidator };
