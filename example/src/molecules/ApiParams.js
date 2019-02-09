import React from "react";

import ApiIndicativeParams from "../atoms/ApiIndicativeParams";

export default function ApiParams({ children, runOnMount, indicativeParams }) {
  return (
    <ul className="text-sm leading-loose">
      {children}

      {indicativeParams && <ApiIndicativeParams />}

      <li>
        options (optional): an object to configure your hook, with the following
        keys:
        <ul>
          <li>
            messages (optional): Check how you can use messages{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://indicative.adonisjs.com/docs/templating"
            >
              here.
            </a>
          </li>

          <li>
            formatter (optional): Check how to use formatters{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://indicative.adonisjs.com/docs/formatters"
            >
              here.
            </a>
          </li>

          <li>
            onSuccess (optional): A callback to run every time validation passes
          </li>

          <li>
            onError (optional): A callback to run every time validation fails
          </li>

          {runOnMount && (
            <li>
              runOnMount (optional): If true, the validation runs on component
              mount
            </li>
          )}
        </ul>
      </li>
    </ul>
  );
}
