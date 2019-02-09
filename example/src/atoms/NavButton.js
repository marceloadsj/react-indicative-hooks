import React from "react";

export default function NavButton(props) {
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
