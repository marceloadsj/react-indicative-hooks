import React, { Fragment } from 'react';
import { useStateValidator } from 'react-indicative-hooks';

const rules = 'required';

const messages = {
    required: 'Please, fill the input with some data'
};

export default function SimpleInput() {
    const [value, setValue, error] = useStateValidator('', rules, messages);

    return (
        <Fragment>
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
        </Fragment>
    );
}
