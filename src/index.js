import { useState, useEffect, useMemo, useCallback } from "react";
import { validate, validateAll, rule } from "indicative";

function useValidate(data, rules, messages = {}) {
  const { formatter, onSuccess, onError } = messages;
  messages = messages.messages || messages;

  const [error, setError] = useState();

  useEffect(() => {
    validate(data, rules, messages, formatter)
      .then(() => {
        setError();
        if (onSuccess) onSuccess();
      })
      .catch(errors => {
        const error = errors[0];
        setError(error);
        if (onError) onError(error);
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
        setErrors();
        if (onSuccess) onSuccess();
      })
      .catch(errors => {
        setErrors(errors);
        if (onError) onError(errors);
      });
  }, Object.values(data));

  return errors;
}

function useStateValidator(initialState, rules, messages = {}) {
  const {
    formatter,
    confirmationValue,
    runOnMount,
    onSuccess,
    onError,
    setError,
    setValue
  } = messages;
  messages = messages.messages || messages;

  const [value, setInternalValue] = useState(initialState);
  const [error, setInternalError] = useState();
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
      validate(
        { value, value_confirmation: confirmationValue },
        { value: rules },
        messages,
        formatter
      )
        .then(() => {
          setInternalError();
          if (setError) setError();
          if (onSuccess) onSuccess();
        })
        .catch(errors => {
          const error = errors[0];
          setInternalError(error);
          if (setError) setError(error);
          if (onError) onError(error);
        });
    }
  }, [value, confirmationValue]);

  const setValueAndTouched = useCallback(value => {
    if (!touched) setTouched(true);

    if (typeof value === "object" && value.target) {
      value = value.target.value;
    }

    setInternalValue(value);
    if (setValue) setValue(value);
  }, []);

  return [value, setValueAndTouched, error];
}

export {
  useValidate,
  useValidateAll,
  useStateValidator,
  validate,
  validateAll,
  rule
};
