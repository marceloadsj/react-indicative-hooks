import React from "react";

export default function CodeBlock({ comp, ...props }) {
  return (
    <pre
      className={`bg-grey-darkest text-white p-5 m-5 rounded-sm overflow-scroll ${
        comp ? "h-64" : ""
      }`}
      {...props}
    />
  );
}
