import React from 'react';
import {
  cleanup,
  render,
  fireEvent,
  waitForDomChange
} from '@testing-library/react';

import SimpleForm from '../example/src/SimpleForm';
import FormWithOptions from '../example/src/FormWithOptions';
import SimpleFormAll from '../example/src/SimpleFormAll';
import FormAllWithOptions from '../example/src/FormAllWithOptions';
import SimpleInput from '../example/src/SimpleInput';
import InputWithOptions from '../example/src/InputWithOptions';

import {
  useValidate,
  useValidateAll,
  useStateValidator,
  validate,
  validateAll
} from './';

afterEach(cleanup);

describe('all functions', () => {
  it('exists', () => expect(useValidate).toBeTruthy());
  it('exists', () => expect(useValidateAll).toBeTruthy());
  it('exists', () => expect(useStateValidator).toBeTruthy());
  it('exists', () => expect(validate).toBeTruthy());
  it('exists', () => expect(validateAll).toBeTruthy());
});

describe('simple form useValidate', () => {
  const run = async () => {
    const { getByTestId } = render(<SimpleForm />);

    const name = getByTestId('name');
    const email = getByTestId('email');
    const error = getByTestId('error');

    await waitForDomChange({ container: error });

    return { name, email, error };
  };

  it('first render with error message', async () => {
    const { name, email, error } = await run();

    expect(name.value).toBe('');
    expect(email.value).toBe('');
    expect(error.textContent).toBe(
      'Please, fill the name input with some data'
    );
  });

  it('changing first field show second error', async () => {
    const { name, error } = await run();

    fireEvent.change(name, { target: { value: 'value' } });
    await waitForDomChange({ container: error });

    expect(name.value).toBe('value');
    expect(error.textContent).toBe('required validation failed on email');
  });

  it('changing second field show third error', async () => {
    const { name, email, error } = await run();

    fireEvent.change(name, { target: { value: 'value' } });
    fireEvent.change(email, { target: { value: 'value' } });
    await waitForDomChange({ container: error });

    expect(name.value).toBe('value');
    expect(email.value).toBe('value');
    expect(error.textContent).toBe('You need to enter a valid email');
  });

  it('filling the form correctly hide errors', async () => {
    const { name, email, error } = await run();

    fireEvent.change(name, { target: { value: 'value' } });
    fireEvent.change(email, { target: { value: 'value@value.com' } });
    await waitForDomChange({ container: error });

    expect(name.value).toBe('value');
    expect(email.value).toBe('value@value.com');
    expect(error.textContent).toBe('');
  });
});

describe('optional form useValidate', () => {
  const run = async () => {
    const { getByTestId } = render(<FormWithOptions />);

    const alert = getByTestId('alert');
    const name = getByTestId('name');
    const email = getByTestId('email');
    const error = getByTestId('error');

    await waitForDomChange({ container: error });

    return { alert, name, email, error };
  };

  it('first render with error message', async () => {
    const { alert, name, email, error } = await run();

    expect(alert.textContent).toBe('Sorry, you have an error');
    expect(name.value).toBe('');
    expect(email.value).toBe('');
    expect(error.textContent).toBe(
      'Please, fill the name input with some data'
    );
  });

  it('changing first field show second error', async () => {
    const { alert, name, error } = await run();

    fireEvent.change(name, { target: { value: 'value' } });
    await waitForDomChange({ container: error });

    expect(alert.textContent).toBe('Sorry, you have an error');
    expect(name.value).toBe('value');
    expect(error.textContent).toBe('required validation failed on email');
  });

  it('changing second field show third error', async () => {
    const { alert, name, email, error } = await run();

    fireEvent.change(name, { target: { value: 'value' } });
    fireEvent.change(email, { target: { value: 'value' } });
    await waitForDomChange({ container: error });

    expect(alert.textContent).toBe('Sorry, you have an error');
    expect(name.value).toBe('value');
    expect(email.value).toBe('value');
    expect(error.textContent).toBe('You need to enter a valid email');
  });

  it('filling the form correctly hide errors', async () => {
    const { alert, name, email, error } = await run();

    fireEvent.change(name, { target: { value: 'value' } });
    fireEvent.change(email, { target: { value: 'value@value.com' } });
    await waitForDomChange({ container: error });

    expect(alert.textContent).toBe('');
    expect(name.value).toBe('value');
    expect(email.value).toBe('value@value.com');
    expect(error.textContent).toBe('');
  });
});

describe('simple form useValidateAll', () => {
  const run = async () => {
    const { getByTestId } = render(<SimpleFormAll />);

    const name = getByTestId('name');
    const email = getByTestId('email');
    const error = getByTestId('error');

    await waitForDomChange({ container: error });

    return { name, email, error };
  };

  it('first render with error message', async () => {
    const { name, email, error } = await run();

    expect(name.value).toBe('');
    expect(email.value).toBe('');
    expect(error.textContent).toBe(
      'Please, fill the name input with some data, required validation failed on email'
    );
  });

  it('changing first field show second error', async () => {
    const { name, error } = await run();

    fireEvent.change(name, { target: { value: 'value' } });
    await waitForDomChange({ container: error });

    expect(name.value).toBe('value');
    expect(error.textContent).toBe('required validation failed on email');
  });

  it('changing second field show third error', async () => {
    const { name, email, error } = await run();

    fireEvent.change(name, { target: { value: 'value' } });
    fireEvent.change(email, { target: { value: 'value' } });
    await waitForDomChange({ container: error });

    expect(name.value).toBe('value');
    expect(email.value).toBe('value');
    expect(error.textContent).toBe('You need to enter a valid email');
  });

  it('filling the form correctly hide errors', async () => {
    const { name, email, error } = await run();

    fireEvent.change(name, { target: { value: 'value' } });
    await waitForDomChange({ container: error });

    fireEvent.change(email, { target: { value: 'value@value.com' } });
    await waitForDomChange({ container: error });

    expect(name.value).toBe('value');
    expect(email.value).toBe('value@value.com');
    expect(error.textContent).toBe('');
  });
});

describe('optional form useValidateAll', () => {
  const run = async () => {
    const { getByTestId } = render(<FormAllWithOptions />);

    const alert = getByTestId('alert');
    const name = getByTestId('name');
    const email = getByTestId('email');
    const error = getByTestId('error');

    await wait({ alert, error });

    return { alert, name, email, error };
  };

  const wait = async ({ alert, error }) => {
    return Promise.all([
      alert && waitForDomChange({ container: alert }),
      error && waitForDomChange({ container: error })
    ]);
  };

  it('first render with error message', async () => {
    const { alert, name, email, error } = await run();

    expect(alert.textContent).toBe('Sorry, you have an error');
    expect(name.value).toBe('');
    expect(email.value).toBe('');
    expect(error.textContent).toBe(
      'Please, fill the name input with some data, required validation failed on email'
    );
  });

  it('changing first field show second error', async () => {
    const { alert, name, error } = await run();

    fireEvent.change(name, { target: { value: 'value' } });
    await wait({ error });

    expect(alert.textContent).toBe('Sorry, you have an error');
    expect(name.value).toBe('value');
    expect(error.textContent).toBe('required validation failed on email');
  });

  it('changing second field show third error', async () => {
    const { alert, name, email, error } = await run();

    fireEvent.change(name, { target: { value: 'value' } });
    fireEvent.change(email, { target: { value: 'value' } });
    await wait({ error });

    expect(alert.textContent).toBe('Sorry, you have an error');
    expect(name.value).toBe('value');
    expect(email.value).toBe('value');
    expect(error.textContent).toBe('You need to enter a valid email');
  });

  it('filling the form correctly hide errors', async () => {
    const { alert, name, email, error } = await run();

    fireEvent.change(name, { target: { value: 'value' } });
    await wait({ error });

    fireEvent.change(email, { target: { value: 'value@value.com' } });
    await wait({ alert, error });

    expect(alert.textContent).toBe('');
    expect(name.value).toBe('value');
    expect(email.value).toBe('value@value.com');
    expect(error.textContent).toBe('');
  });
});

describe('simple input useStateValidator', () => {
  const run = async () => {
    const { getByTestId } = render(<SimpleInput />);

    const input = getByTestId('input');
    const error = getByTestId('error');

    return { input, error };
  };

  it('first render without error message', async () => {
    const { input, error } = await run();

    expect(input.value).toBe('');
    expect(error.textContent).toBe('');
  });

  it("changing field don't show error", async () => {
    const { input, error } = await run();

    fireEvent.change(input, { target: { value: 'value' } });

    expect(input.value).toBe('value');
    expect(error.textContent).toBe('');
  });

  it('changing field to empty show error', async () => {
    const { input, error } = await run();

    fireEvent.change(input, { target: { value: 'value' } });
    fireEvent.change(input, { target: { value: '' } });
    await waitForDomChange({ container: error });

    expect(input.value).toBe('');
    expect(error.textContent).toBe('Please, fill the input with some data');
  });
});

describe('optional input useStateValidator', () => {
  const run = async () => {
    const { getByTestId } = render(<InputWithOptions />);

    const alert = getByTestId('alert');
    const input = getByTestId('input');
    const error = getByTestId('error');

    await wait({ alert, error });

    return { alert, input, error };
  };

  const wait = async ({ alert, error }) => {
    return Promise.all([
      alert && waitForDomChange({ container: alert }),
      error && waitForDomChange({ container: error })
    ]);
  };

  it('first render with error message', async () => {
    const { alert, input, error } = await run();

    expect(alert.textContent).toBe('Sorry, you have an error');
    expect(input.value).toBe('');
    expect(error.textContent).toBe('Please, fill the input with some data');
  });

  it('changing field hide error show error', async () => {
    const { alert, input, error } = await run();

    fireEvent.change(input, { target: { value: 'value' } });
    await wait({ alert, error });

    expect(alert.textContent).toBe('');
    expect(input.value).toBe('value');
    expect(error.textContent).toBe('');
  });
});
