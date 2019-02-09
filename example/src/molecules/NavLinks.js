import React from "react";

import NavLink from "../atoms/NavLink";

export default function NavLinks() {
  return (
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
  );
}
