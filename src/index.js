import { useState, useEffect, useMemo, useCallback } from "react";
import { validate, validateAll } from "indicative";

function useValidate(data, rules, messages = {}) {
  const { formatter, onSuccess, onError } = messages;
  messages = messages.messages || messages;

  const [error, setError] = useState();

  useEffect(() => {
    validate(data, rules, messages, formatter)
      .then(() => {
        setError(undefined);
        if (onSuccess) onSuccess();
      })
      .catch(errors => {
        setError(errors[0]);
        if (onError) onError();
      });
  }, Object.values(data));

  return error;
}

function useValidateAll(data, rules, messages = {}) {
  const { formatter, onSuccess, onError } = messages;
  messages = messages.messages || messages;

  const [errors, setErrors] = useState();

  useEffect(() => {
    validateAll(data, rules, messages, formatter)
      .then(() => {
        setErrors(undefined);
        if (onSuccess) onSuccess();
      })
      .catch(errors => {
        setErrors(errors);
        if (onError) onError();
      });
  }, Object.values(data));

  return errors;
}

function useStateValidator(initialState, rules, messages = {}) {
  const { formatter, runOnMount, onSuccess, onError } = messages;
  messages = messages.messages || messages;

  const [value, setValue] = useState(initialState);
  const [error, setError] = useState();
  const [touched, setTouched] = useState(false);

  messages = useMemo(() => {
    if (messages) {
      return Object.keys(messages).reduce((parsedMessages, key) => {
        parsedMessages[`value.${key}`] = messages[key];
        return parsedMessages;
      }, {});
    }
  }, [messages]);

  useEffect(() => {
    if (runOnMount || touched) {
      validate({ value }, { value: rules }, messages, formatter)
        .then(() => {
          setError(undefined);
          if (onSuccess) onSuccess();
        })
        .catch(errors => {
          setError(errors[0]);
          if (onError) onError();
        });
    }
  }, [value]);

  const setValueAndTouched = useCallback(
    value => setTouched(true) & setValue(value),
    []
  );

  return [value, setValueAndTouched, error];
}

export {
  useValidate,
  useValidateAll,
  useStateValidator,
  validate,
  validateAll
};
