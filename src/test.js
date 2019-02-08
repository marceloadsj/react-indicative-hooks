import React from "react";
import {
  cleanup,
  render,
  fireEvent,
  waitForDomChange
} from "react-testing-library";

import Form from "../example/src/Form";
import Input from "../example/src/Input";
import { useValidate, useStateValidator } from "./";

afterEach(cleanup);

describe("useValidate", () => {
  it("exists", () => expect(useValidate).toBeTruthy());

  it("validate some inputs after change", async () => {
    const { getByTestId } = render(<Form />);

    const name = getByTestId("name");
    const email = getByTestId("email");
    const error = getByTestId("error");

    await waitForDomChange({ container: error });

    expect(name.value).toBe("");
    expect(email.value).toBe("");
    expect(error.textContent).toBe(
      "Please, fill the name input with some data"
    );

    fireEvent.change(name, { target: { value: "value" } });
    await waitForDomChange({ container: error });

    expect(name.value).toBe("value");
    expect(error.textContent).toBe("required validation failed on email");

    fireEvent.change(email, { target: { value: "value" } });
    await waitForDomChange({ container: error });

    expect(email.value).toBe("value");
    expect(error.textContent).toBe("You need to enter a valid email");

    fireEvent.change(email, { target: { value: "value@value.com" } });
    await waitForDomChange({ container: error });

    expect(email.value).toBe("value@value.com");
    expect(error.textContent).toBe("");
  });
});

describe("useStateValidator", () => {
  it("exists", () => expect(useStateValidator).toBeTruthy());

  it("validate a input after change", async () => {
    const { getByTestId } = render(<Input />);

    const input = getByTestId("input");
    const error = getByTestId("error");

    expect(input.value).toBe("");
    expect(error.textContent).toBe("");

    fireEvent.change(input, { target: { value: "value" } });

    expect(input.value).toBe("value");
    expect(error.textContent).toBe("");

    fireEvent.change(input, { target: { value: "" } });
    await waitForDomChange({ container: error });

    expect(input.value).toBe("");
    expect(error.textContent).toBe("Please, fill the input with some data");
  });
});
