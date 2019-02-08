import React from "react";

function Divider() {
  return <hr className="border-dashed border-grey border my-10" />;
}

function CodeBlock(props) {
  return (
    <pre className="bg-grey-darkest text-white p-5 m-5 rounded-sm" {...props} />
  );
}

function NavLink(props) {
  return (
    <a
      {...props}
      className="block sm:inline-block text-blue-lighter hover:text-white mr-5"
    >
      {props.children}
    </a>
  );
}

function NavButton() {
  return (
    <div>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.npmjs.com/package/react-indicative-hooks"
        className="inline-block text-sm p-2 rounded text-blue-darkest bg-white hover:bg-blue-dark hover:text-white no-underline"
      >
        Go to NPM
      </a>
    </div>
  );
}

function Nav() {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-blue-darkest p-6 mb-5 fixed w-screen">
      <div className="flex items-center flex-no-shrink text-white mr-6">
        <span className="text-xl">
          <span role="img" aria-label="react-indicative-hooks">
            ✈️ ️️
          </span>{" "}
          React Indicative Hooks
        </span>
      </div>

      <div className="w-full block flex-grow sm:flex sm:items-center sm:w-auto">
        <div className="text-sm sm:flex-grow">
          <NavLink href="#install">Installing</NavLink>

          <NavLink href="#api">API & Examples</NavLink>

          <NavLink
            target="_blank"
            href="https://github.com/marceloadsj/react-indicative-hooks"
          >
            Repository in Github
          </NavLink>
        </div>

        <NavButton />
      </div>
    </nav>
  );
}

function ApiIndicativeParams() {
  return (
    <>
      <li>
        rules: Check all available rules{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://indicative.adonisjs.com/"
        >
          here
        </a>
      </li>

      <li>
        messages: Check how you can use messages{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://indicative.adonisjs.com/docs/templating"
        >
          here
        </a>
      </li>

      <li>
        formatter: Check how to use formatters{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://indicative.adonisjs.com/docs/formatters"
        >
          here
        </a>
      </li>
    </>
  );
}

function ApiFunction({ title, params }) {
  return (
    <h4 className="mb-3">
      <span className="text-blue-dark">{title}</span> ( {params.join(" , ")} )
    </h4>
  );
}

function ApiParams({ children, indicativeParams }) {
  return (
    <ul className="text-sm leading-loose">
      {children}

      {indicativeParams && <ApiIndicativeParams />}
    </ul>
  );
}

function SectionDescription(props) {
  return <p className="mb-3" {...props} />;
}

function Section({ name, title, children, className }) {
  return (
    <section>
      <div id={name} className={className} />

      <h3 className="mb-5">{title}</h3>

      {children}
    </section>
  );
}

function InstallSection() {
  return (
    <Section name="install" title="Installing" className="h-24">
      <SectionDescription>
        Check how you can install and use the library with validation integrated
        with{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://indicative.adonisjs.com"
        >
          Indicative
        </a>
      </SectionDescription>

      <CodeBlock>npm install react-indicative-hooks --save</CodeBlock>

      <CodeBlock>yarn add react-indicative-hooks</CodeBlock>

      <Divider />
    </Section>
  );
}

function ApiSection() {
  return (
    <Section name="api" title="API & Examples">
      <SectionDescription>
        Validate a single state with some direct configurations, using the
        validate Indicative function:{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://indicative.adonisjs.com/docs/api/validate"
        >
          validate
        </a>
      </SectionDescription>

      <ApiFunction
        title="useStateValidator"
        params={["initialState", "rules", "messages", "formatter"]}
      />

      <ApiParams indicativeParams>
        <li>
          initialState: The state that your input starts with, like the empty
          string used in useState("")
        </li>
      </ApiParams>

      <CodeBlock>
        {`import React from "react";
import { useStateValidator } from "react-indicative-hooks";

const rules = "required";

const messages = {
  required: "Please, fill the input with some data"
};

export default function Input() {
  const [value, setValue, error] = useStateValidator("", rules, messages);

  return (
    <>
      <input value={value} onChange={e => setValue(e.target.value)} />
      <br />
      <p>{error && error.message}</p>
    </>
  );
}`}
      </CodeBlock>

      <Divider />

      <ApiFunction
        title="useValidator"
        params={["data", "rules", "messages", "formatter"]}
      />

      <ApiParams indicativeParams>
        <li>
          data: The object you want to validate with all fields matching the
          rules, check{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://indicative.adonisjs.com/docs/api/validate"
          >
            here
          </a>
        </li>
      </ApiParams>

      <CodeBlock>
        {`import React, { useState } from "react";
import { useValidate } from "react-indicative-hooks";

const rules = {
  name: "required",
  email: "required|email"
};

const messages = {
  "name.required": "Please, fill the name input with some data",
  "email.email": "You need to enter a valid email"
};

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const error = useValidate({ name, email }, rules, messages);

  return (
    <>
      <input value={name} onChange={e => setName(e.target.value)} />
      <br />
      <input value={email} onChange={e => setEmail(e.target.value)} />
      <br />
      <p>{error && error.message}</p>
    </>
  );
}`}
      </CodeBlock>
    </Section>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-grey-light">
      <Nav />

      <main className="p-5">
        <InstallSection />

        <ApiSection />
      </main>
    </div>
  );
}
